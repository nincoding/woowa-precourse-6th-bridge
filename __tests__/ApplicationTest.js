import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App.js';
import BridgeMaker from '../src/BridgeMaker.js';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const runException = async (input) => {
  // given
  const logSpy = getLogSpy();

  const RANDOM_NUMBERS_TO_END = [1, 0, 1];
  const INPUT_NUMBERS_TO_END = ['3', 'U', 'D', 'U', 'Q'];

  mockRandoms([RANDOM_NUMBERS_TO_END]);
  mockQuestions([input, ...INPUT_NUMBERS_TO_END]);

  // when
  const app = new App();
  await app.play();

  // then
  expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  return logSpy;
};

const getOutput = (logSpy) => {
  return logSpy.mock.calls.map(([message]) => message).join('\n');
};

const expectLogContains = (received, logs) => {
  logs.forEach((log) => {
    expect(received).toEqual(expect.stringContaining(log));
  });
};

const expectBridgeOrder = (received, upside, downside) => {
  const upsideIndex = received.indexOf(upside);
  const downsideIndex = received.indexOf(downside);

  expect(upsideIndex).toBeLessThan(downsideIndex);
};

describe('다리 건너기 테스트', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('전체 기능 테스트', () => {
    test('다리 생성 테스트', async () => {
      const randomNumbers = [1, 0, 0];
      const mockGenerator = randomNumbers.reduce((acc, number) => {
        return acc.mockReturnValueOnce(number);
      }, jest.fn());

      const bridge = BridgeMaker.makeBridge(3, mockGenerator);
      expect(bridge).toEqual(['U', 'D', 'D']);
    });

    test('기능 테스트', async () => {
      const logSpy = getLogSpy();
      mockRandoms([1, 0, 1]);
      mockQuestions(['3', 'U', 'D', 'U']);

      const app = new App();
      await app.play();

      const log = getOutput(logSpy);
      expectLogContains(log, [
        '최종 게임 결과',
        '[ O |   | O ]',
        '[   | O |   ]',
        '게임 성공 여부: 성공',
        '총 시도한 횟수: 1',
      ]);
      expectBridgeOrder(log, '[ O |   | O ]', '[   | O |   ]');
    });

    test('예외 테스트', async () => {
      await runException('a');
    });
  });
});
