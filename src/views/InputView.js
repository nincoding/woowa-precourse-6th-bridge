import { Console } from '@woowacourse/mission-utils';
import Validator from '../validators/Validator.js';
import CustomError from '../errors/CustomError.js';
import { ERROR_MESSAGE } from '../constants/error.js';

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  async readBridgeSize() {
    const bridgeSize = await Console.readLineAsync('\n다리의 길이를 입력해주세요.\n');

    if (Validator.isEmptyInput(bridgeSize)) {
      throw new CustomError(ERROR_MESSAGE.invalidEmptyInput);
    }

    if (!Validator.isValidInteger(bridgeSize)) {
      throw new CustomError(ERROR_MESSAGE.invalidInteger);
    }

    if (!Validator.isValidRange(bridgeSize, 3, 20)) {
      throw new CustomError(ERROR_MESSAGE.invalidRange);
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
