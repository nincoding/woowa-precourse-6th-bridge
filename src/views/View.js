import InputView from './InputView.js';
import OutputView from './OutputView.js';

class View {
  #inputView;
  #outputView;

  constructor() {
    this.#inputView = InputView;
    this.#outputView = OutputView;
  }

  async #validateHandler(callback) {
    try {
      return await callback();
    } catch ({ message }) {
      this.#outputView.printMessage(message);

      return this.#validateHandler(callback);
    }
  }

  async getBridgeSize() {
    const bridgeSize = await this.#validateHandler(() => this.#inputView.readBridgeSize());

    return bridgeSize;
  }

  printStart() {
    this.#outputView.printMessage('다리 건너기 게임을 시작합니다.');
  }
}

export default View;
