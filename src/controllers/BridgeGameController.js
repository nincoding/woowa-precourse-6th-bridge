import BridgeGame from '../domains/BridgeGame.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class BridgeGameController {
  #domain;
  #size;

  constructor() {
    this.#domain = new BridgeGame();
    OutputView.printStartMessage();
  }

  async start() {
    this.#size = await this.tryBuildBridge();
    await this.gameStatus();
  }

  async gameStatus() {
    let moveStatus = this.#domain.getUserBridge();

    for (let index = 0; index < this.#size; index++) {
      let moving = await this.tryBuildMoving();
      moveStatus = this.#domain.move(index, moving);
      OutputView.printMap(moveStatus);

      if (!this.#domain.isClear()) {
        await this.handleNonClearState();
        break;
      }
    }
  }

  async handleNonClearState() {
    const gameCommand = await this.tryBuildCommand();

    if (gameCommand === 'R') {
      this.#domain.retry();
      await this.gameStatus();
    }
  }

  async tryBuildBridge() {
    try {
      const size = await InputView.readBridgeSize();
      this.#domain.ready(Number(size));
      return size;
    } catch ({ message }) {
      OutputView.printErrorMessage(message);
      return await this.tryBuildBridge();
    }
  }

  async tryBuildMoving() {
    try {
      const moving = await InputView.readMoving();

      return moving;
    } catch ({ message }) {
      OutputView.printErrorMessage(message);
      return await this.tryBuildMoving();
    }
  }

  async tryBuildCommand() {
    try {
      const gameCommand = await InputView.readGameCommand();

      return gameCommand;
    } catch ({ message }) {
      OutputView.printErrorMessage(message);
      await this.tryBuildCommand();
    }
  }

  finishGame() {
    console.log('게임끝');
  }
}

export default BridgeGameController;
