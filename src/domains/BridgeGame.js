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
  #userBridge = [];
  #tryCount = 1;

  constructor(size) {
    this.#validate(size);

    this.#bridge = this.#initBridge(size);
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(index, moving) {
    if (this.#bridge[index] === moving) {
      this.#userBridge.push({ [moving]: 'O' });

      return this.#userBridge;
    }

    this.#userBridge.push({ [moving]: 'X' });

    return this.#userBridge;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#tryCount += 1;
    this.#userBridge = [];
  }

  getBridge() {
    return this.#bridge;
  }

  getUserBridge() {
    return this.#userBridge;
  }

  getTryCount() {
    return this.#tryCount;
  }

  getIsNotClear() {
    // userBridge 배열의 어떠한 요소라도 'X'를 포함하고 있는지 확인
    return this.#userBridge.some((bridgePart) => Object.values(bridgePart).includes('X'));
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
