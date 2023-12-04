const Validator = {
  isEmptyInput(input) {
    return String(input).trim() === '';
  },

  isValidInteger(input) {
    return !this.isEmptyInput(input) && Number.isInteger(Number(input)) && Number(input) > 0;
  },

  isValidRange(input, min, max) {
    return Number(input) >= min && Number(input) <= max;
  },

  isValidSame(input, caseOne, caseTwo) {
    return input === caseOne || input === caseTwo;
  },
};

export default Validator;
