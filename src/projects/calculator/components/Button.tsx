import React from "react";
import { buttonProps } from "../Calculator.types";

const Button: React.FC<buttonProps> = ({ label, onClick }) => {
  return (
    <input
      className="h-12 md:h-18 bg-gray-300 rounded-lg"
      type="button"
      value={label}
      onClick={onClick}
    />
  );
};

export default Button;
