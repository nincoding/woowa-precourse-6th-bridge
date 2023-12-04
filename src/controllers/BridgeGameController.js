class BridgeGameController {
  #domain;
  #view;

  constructor(domain, view) {
    this.#domain = domain;
    this.#view = view;
  }

  async start() {
    this.#view.printStart();

    await this.#view.validateInputHandler(async () => this.requireBridgeSize());

    console.log(this.#domain.getBridge());
  }

  async requireBridgeSize() {
    const bridgeSize = await this.#view.getBridgeSize();

    this.#domain = new this.#domain(bridgeSize);

    return bridgeSize;
  }
}

export default BridgeGameController;
