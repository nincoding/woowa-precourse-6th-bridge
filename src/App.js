import BridgeGameController from './controllers/BridgeGameController.js';

class App {
  #controller;

  constructor() {
    this.#controller = new BridgeGameController();
  }
  async play() {
    await this.#controller.start();
  }
}

export default App;
