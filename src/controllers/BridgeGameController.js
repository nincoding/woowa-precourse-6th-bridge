import BridgeGame from '../domains/BridgeGame.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class BridgeGameController {
  #domain;

  constructor() {
    this.#domain = new BridgeGame();
    OutputView.printStartMessage();
  }

  async start() {
    await this.tryBuildBridge();
  }

  async tryBuildBridge() {
    try {
      const size = await InputView.readBridgeSize();

      this.#domain.ready(Number(size));

      await this.tryBuildMoving();
    } catch ({ message }) {
      OutputView.printErrorMessage(message);

      await this.tryBuildBridge();
    }
  }

  async tryBuildMoving() {
    try {
      const moving = await InputView.readMoving();

      return moving;
    } catch ({ message }) {
      OutputView.printErrorMessage(message);

      await this.tryBuildMoving();
    }
  }
}

export default BridgeGameController;
