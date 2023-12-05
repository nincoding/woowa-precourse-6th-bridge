import CustomError from '../errors/CustomError.js';
import { ERROR_MESSAGE } from '../constants/messages.js';
import { GAME_CONDITION, SYMBOL } from '../constants/constants.js';

const Validator = {
  validateBridgeSize(bridgeSize) {
    if (this.isEmptyString(bridgeSize)) throw new CustomError(ERROR_MESSAGE.invalidEmpty);
    if (!this.isValidInteger(bridgeSize)) throw new CustomError(ERROR_MESSAGE.invalidInteger);
    if (
      !this.isValidRange(bridgeSize, GAME_CONDITION.bridgeMinRange, GAME_CONDITION.bridgeMaxRange)
    ) {
      throw new CustomError(ERROR_MESSAGE.invalidBridgeSize);
    }
  },

  validateMoving(moving) {
    if (this.isEmptyString(moving)) throw new CustomError(ERROR_MESSAGE.invalidEmpty);
    if (this.isValidSame(moving, GAME_CONDITION.movingUp, GAME_CONDITION.movingDown)) {
      throw new CustomError(ERROR_MESSAGE.invalidMoving);
    }
  },

  validateGameCommand(gameCommand) {
    if (this.isEmptyString(gameCommand)) throw new CustomError(ERROR_MESSAGE.invalidEmpty);
    if (this.isValidSame(gameCommand, GAME_CONDITION.retryCommand, GAME_CONDITION.endCommand)) {
      throw new CustomError(ERROR_MESSAGE.invalidGameCommand);
    }
  },

  isEmptyString(input) {
    return String(input).trim() === SYMBOL.emptyString;
  },

  isValidInteger(input) {
    return !this.isEmptyString(input) && Number.isInteger(Number(input)) && Number(input) > 0;
  },

  isValidRange(input, minRange, maxRange) {
    return Number(input) >= minRange && Number(input) <= maxRange;
  },

  isValidSame(input, caseOne, caseTwo) {
    return input === caseOne || input === caseTwo;
  },
};

export default Validator;
