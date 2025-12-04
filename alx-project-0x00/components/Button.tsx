import { ButtonProps } from "@/interfaces";
import React from "react";

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    <button
      className={`px-4 py-2 bg-green-500 text-white font-medium hover:bg-green-600 transition ${styles}`}
    >
      {title}
    </button>
  );
};

export default Button;
