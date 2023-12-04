class BridgeGameController {
  #view;

  constructor(view) {
    this.#view = view;
  }

  async start() {
    this.#view.printStart();

    const bridgeSize = await this.#view.getBridgeSize();
  }
}

export default BridgeGameController;
