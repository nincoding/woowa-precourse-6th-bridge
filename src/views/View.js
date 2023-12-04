import InputView from './InputView.js';
import OutputView from './OutputView.js';

class View {
  #inputView;
  #outputView;

  constructor() {
    this.#inputView = InputView;
    this.#outputView = OutputView;
  }

  async validateInputHandler(callback) {
    try {
      return await callback();
    } catch ({ message }) {
      this.#outputView.printMessage(message);

      return this.validateInputHandler(callback);
    }
  }

  async getBridgeSize() {
    const bridgeSize = await this.validateInputHandler(() => this.#inputView.readBridgeSize());

    return bridgeSize;
  }

  async getMoving() {
    const moving = await this.validateInputHandler(() => this.#inputView.readMoving());

    return moving;
  }

  async getGameCommand() {
    const gameCommand = await this.validateInputHandler(() => this.#inputView.readGameCommand());

    return gameCommand;
  }

  printStart() {
    this.#outputView.printMessage('다리 건너기 게임을 시작합니다.');
  }
}

export default View;
