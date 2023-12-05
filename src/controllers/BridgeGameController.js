import BridgeGame from '../domains/BridgeGame.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class BridgeGameController {
  #domain;

  constructor() {
    OutputView.printStart();
  }

  async start() {
    const bridgeSize = await this.#tryBrideSize();
    this.#domain = new BridgeGame(bridgeSize);

    await this.playGame(bridgeSize);

    this.finishGame();
  }

  async playGame(bridgeSize) {
    let index = 0;

    while (!this.#domain.isFinishGame(bridgeSize)) {
      let moving = await this.#tryMoving();

      this.#domain.move(index, moving);
      let result = this.#domain.getUserMoveStatus();
      OutputView.printMap(result);

      index += 1;

      if (!this.#domain.isClear()) {
        return await this.#tryGameCommand(bridgeSize);
      }
    }
  }

  finishGame() {
    const result = this.#domain.getUserMoveStatus();
    const isClear = this.#domain.isClear();
    const tryCount = this.#domain.getTryCount();

    OutputView.printResult(result, isClear, tryCount);
  }

  async #tryBrideSize() {
    try {
      const bridgeSize = await InputView.readBridgeSize();

      return Number(bridgeSize);
    } catch ({ message }) {
      OutputView.printError(message);

      return this.#tryBrideSize();
    }
  }

  async #tryMoving() {
    try {
      const Moving = await InputView.readMoving();

      return Moving;
    } catch ({ message }) {
      OutputView.printError(message);

      return this.#tryMoving();
    }
  }

  async #tryGameCommand(bridgeSize) {
    try {
      const gameCommand = await InputView.readGameCommand();

      await this.#commandHandler(gameCommand, bridgeSize);
    } catch ({ message }) {
      OutputView.printError(message);

      return this.#tryGameCommand();
    }
  }

  async #commandHandler(gameCommand, bridgeSize) {
    if (gameCommand === 'R') {
      this.#domain.retry();
      await this.playGame(bridgeSize);
    }
  }
}

export default BridgeGameController;
