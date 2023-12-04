import CustomError from '../errors/CustomError.js';
import Validator from '../validators/Validator.js';
import { Console } from '@woowacourse/mission-utils';
import { INPUT } from '../constants/error.js';

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  async readBridgeSize() {
    const bridgeSize = await Console.readLineAsync('\n다리의 길이를 입력해주세요.\n');

    if (Validator.isEmptyString(bridgeSize)) {
      throw new CustomError(INPUT.invalidEmpty);
    }

    if (!Validator.isValidInteger(bridgeSize)) {
      throw new CustomError(INPUT.invalidInteger);
    }

    return bridgeSize;
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  async readMoving() {
    const moving = await Console.readLineAsync('이동할 칸을 선택해주세요. (위: U, 아래: D)\n');

    if (Validator.isEmptyString(moving)) {
      throw new CustomError(INPUT.invalidEmpty);
    }

    if (!Validator.isValidMatching(moving, 'U', 'D')) {
      throw new CustomError(INPUT.invalidMoving);
    }

    return moving;
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  async readGameCommand() {
    const gameCommand = await Console.readLineAsync(
      '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n'
    );

    if (Validator.isEmptyString(gameCommand)) {
      throw new CustomError(INPUT.invalidEmpty);
    }

    if (!Validator.isValidMatching(gameCommand, 'R', 'Q')) {
      throw new CustomError(INPUT.invalidGameCommand);
    }

    return gameCommand;
  },
};

export default InputView;
