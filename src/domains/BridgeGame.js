import { BRIDGE_CONDITION } from '../constants/condition.js';
import { SIZE } from '../constants/error.js';
import CustomError from '../errors/CustomError.js';
import Validator from '../validators/Validator.js';
import BridgeMaker from '../BridgeMaker.js';
import BridgeRandomNumberGenerator from '../BridgeRandomNumberGenerator.js';

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;

  constructor(size) {
    this.#validate(size);

    this.#bridge = this.#initBridge(size);
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {}

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}

  getBridge() {
    return this.#bridge;
  }

  #validate(size) {
    if (!Validator.isValidRange(size, BRIDGE_CONDITION.minRange, BRIDGE_CONDITION.maxRange)) {
      throw new CustomError(SIZE.invalidRange);
    }
  }

  #initBridge(size) {
    return BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
  }
}

export default BridgeGame;
