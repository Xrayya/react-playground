export function calculatePostfix(inputs: Array<number | String>) {
  let firstValue: number;
  let secondValue: number;
  // let operator: String;
  inputs.forEach((input) => {
    if (typeof input === "number") {
      if (secondValue === 0) firstValue = input;
      else secondValue = input;
    } else {
      switch (input) {
        case "+":
          firstValue += secondValue;
          secondValue = 0;
          break;
        case "-":
          firstValue -= secondValue;
          secondValue = 0;
          break;
        case "*":
          firstValue *= secondValue;
          secondValue = 0;
          break;
        case "/":
          firstValue /= secondValue;
          secondValue = 0;
          break;
        case "√":
          firstValue += secondValue;
          secondValue = 0;
          break;
        case "-/+":
          firstValue += secondValue;
          secondValue = 0;
          break;
      }
    }
  });
}
