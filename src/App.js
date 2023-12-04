import BridgeGameController from './controllers/BridgeGameController.js';
import View from './views/View.js';

class App {
  #view;
  #controller;

  constructor() {
    this.#view = new View();
    this.#controller = new BridgeGameController(this.#view);
  }

  async play() {
    await this.#controller.start();
  }
}

export default App;
