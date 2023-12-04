import { PREFIX } from '../constants/error.js';

class CustomError extends Error {
  constructor(message) {
    super(`${PREFIX} ${message}`);
  }
}

export default CustomError;
