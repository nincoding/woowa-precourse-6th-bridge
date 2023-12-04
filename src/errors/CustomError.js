import { PREFIX } from '../constants/error.js';

class CustomError extends Error {
  constructor(message) {
    super(`${PREFIX} ${message}`);
  }

  static inputView(message) {
    return new CustomError(message);
  }
}

export default CustomError;
