import { ERROR_MESSAGE } from '../constants/messages.js';

class CustomError extends Error {
  constructor(message) {
    super(`${ERROR_MESSAGE.prefix} ${message}`);
  }
}

export default CustomError;
