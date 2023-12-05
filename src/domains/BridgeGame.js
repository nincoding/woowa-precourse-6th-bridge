import BridgeMaker from '../BridgeMaker.js';
import BridgeRandomNumberGenerator from '../BridgeRandomNumberGenerator.js';

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #userMoveStatus = [];
  #tryCount = 1;

  constructor(size) {
    this.#bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(index, moving) {
    const isMoving = this.#bridge[index] === moving;
    const status = isMoving ? 'O' : 'X';

    this.#userMoveStatus.push({ [moving]: status });
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#tryCount += 1;
    this.#userMoveStatus = [];
  }

  isFinishGame(size) {
    return this.#userMoveStatus.length === size;
  }

  isClear() {
    return !this.#userMoveStatus.some((part) => Object.values(part).includes('X'));
  }

  getTryCount() {
    return this.#tryCount;
  }

  getUserMoveStatus() {
    return this.#userMoveStatus;
  }
}

export default BridgeGame;
