import BridgeGame from './domains/BridgeGame.js';
import BridgeGameController from './controllers/BridgeGameController.js';
import View from './views/View.js';

class App {
  #domain;
  #view;
  #controller;

  constructor() {
    this.#domain = BridgeGame;
    this.#view = new View();
    this.#controller = new BridgeGameController(this.#domain, this.#view);
  }

  async play() {
    await this.#controller.start();
  }
}

export default App;
