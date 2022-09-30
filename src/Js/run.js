const inputsAreValid = (...input) => {
  return input.every(i => typeof i === "number" && !isNaN(i));
};
const parseInputs = (...input) => {
  return input.map(item => parseInt(item));
};

const alertService = new AlertService();
const componentService = new ComponentService();
const run = (alertService, componentService) => {
    alertService.hideErrors();
    componentService.onClick(() => {
    alertService.hideErrors();
    const inputs = componentService.getInputs();
    const parsedInputs = parseInputs(...inputs);
    if (inputsAreValid(...parsedInputs)) {
      const [numA, numB] = parsedInputs;
      componentService.setResult(numA + numB);
    } else {
      componentService.setResult("");
      alertService.handleAdditionError(inputs, parsedInputs);
    }
  });
};
run(alertService, componentService);
