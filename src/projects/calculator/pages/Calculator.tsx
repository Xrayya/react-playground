import { useState } from "react";
import Button from "../components/Button";
import Screen from "../components/Screen";
import { buttonList } from "../components/buttonList";

const Calculator = () => {
  const [displayText, setDisplayText] = useState<String>("0");
  const [inputList, setInputList] = useState<Array<number | String>>([]);
  const [valueInput, setValueInput] = useState<String>("");

  const handleOnClick = (event: React.MouseEvent<HTMLInputElement>) => {
    setDisplayText((prev) => prev + (event.target as HTMLInputElement).value);
    if (event.type === "value") {
      setValueInput((prev) => prev + (event.target as HTMLInputElement).value);
    } else if (event.type === "operator") {
      setInputList((list) => {
        let newList = [...list];
        newList.push(parseFloat(valueInput.toString()))
        setValueInput("");
        return newList;
      });
    }
  };

  return (
    <div className="p-4">
      <h2>Calculator</h2>
      <div className="rounded-lg p-2 border-2 border-gray-600 max-w-screen-sm">
        <Screen displayString={displayText} />
        <div className="mt-4 grid grid-cols-4 gap-2">
          {buttonList.map((button, index) => (
            <Button
              key={index}
              label={button.label}
              type={button.type}
              onClick={handleOnClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
