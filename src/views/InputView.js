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
  readMoving() {},

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

export default InputView;
