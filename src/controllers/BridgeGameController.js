class BridgeGameController {
  #domain;
  #view;

  constructor(domain, view) {
    this.#domain = domain;
    this.#view = view;
  }

  async start() {
    this.#view.printStart();

    const bridgeSize = await this.#view.validateInputHandler(async () => this.requireBridgeSize());

    console.log(this.#domain.getBridge());

    await this.playGame(bridgeSize);
  }

  async playGame(bridgeSize) {
    let result = this.#domain.getUserBridge();

    for (let index = 0; index < bridgeSize; index++) {
      const moving = await this.#view.validateInputHandler(async () => this.requireMoving());

      result = this.#domain.move(index, moving);
      console.log(result);

      if (result.some((move) => move[moving] === 'X')) {
        const command = await this.#view.validateInputHandler(async () => this.requireCommand());

        if (command === 'R') {
          this.#domain.retry();

          return this.playGame(bridgeSize);
        }

        return this.printResult();
      }
    }

    return this.printResult();
  }

  async requireBridgeSize() {
    const bridgeSize = await this.#view.getBridgeSize();

    this.#domain = new this.#domain(bridgeSize);

    return bridgeSize;
  }

  async requireMoving() {
    const moving = await this.#view.getMoving();

    return moving;
  }

  async requireCommand() {
    const command = await this.#view.getGameCommand();

    return command;
  }

  printResult() {
    console.log('최종결과: ', this.#domain.getUserBridge());
    this.#domain.getIsNotClear() ? console.log('실패') : console.log('성공');
    console.log(this.#domain.getTryCount());
  }
}

export default BridgeGameController;
