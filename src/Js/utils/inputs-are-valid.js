const inputsAreValid = (...input) => {
  return input.every(i => typeof i === "number" && !isNaN(i));
};
