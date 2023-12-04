const Validator = {
  isEmptyString(input) {
    return String(input).trim() === '';
  },

  isValidInteger(input) {
    return !this.isEmptyString(input) && Number.isInteger(Number(input)) && Number(input) > 0;
  },

  isValidRange(input, min, max) {
    return input >= min && input <= max;
  },

  isValidMatching(input, caseOne, caseTwo) {
    return input === caseOne || input === caseTwo;
  },
};

export default Validator;
