import { Stack } from "datastructures-js";

export function infixToPostfix(
  inputs: Array<number | String>,
): Array<number | String> {
  let stack = new Stack<number | String>();
  let result = new Stack<number | String>();
  inputs.forEach((input) => {
    switch (input) {
      case ")":
        while (!stack.isEmpty()) {
          if (stack.peek() !== "(") {
            stack.pop();
            break;
          }

          result.push(stack.pop()!);
        }
        break;
      case "(":
      case "^":
        stack.push(input);
        break;
      case "*":
      case "/":
        if (stack.isEmpty()) {
          stack.push(input);
          break;
        }

        while (!stack.isEmpty()) {
          if (
            stack.peek() === "(" ||
            stack.peek() === "+" ||
            stack.peek() === "-"
          )
            break;

          result.push(stack.pop()!);
        }

        stack.push(input);
        break;

      case "+":
      case "-":
        if (stack.isEmpty()) {
          stack.push(input);
          break;
        }

        while (!stack.isEmpty()) {
          if (stack.peek() === "(") {
            break;
          } else {
            result.push(stack.pop()!);
          }
        }

        stack.push(input);
        break;

      default:
        result.push(input);
        break;
    }
    while (!stack.isEmpty()) {
      result.push(stack.pop()!);
    }
  });

  return result.toArray();
}
