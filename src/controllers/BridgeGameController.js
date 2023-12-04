import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class BridgeGameController {
  constructor() {
    OutputView.printStartMessage();
  }

  async start() {
    const bridgeSize = await this.requireBridgeSize();
  }

  async requireBridgeSize() {
    return await this.tryBuildBridge();
  }

  async tryBuildBridge() {
    try {
      const size = await InputView.readBridgeSize();

      return size;
    } catch ({ message }) {
      OutputView.printErrorMessage(message);

      await this.requireBridgeSize();
    }
  }
}

export default BridgeGameController;
