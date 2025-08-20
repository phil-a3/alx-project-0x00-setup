import React from "react";

interface ButtonProps {
  title: string;
  styles?: string;
}

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    <button
      className={`px-4 py-2 bg-blue-500 text-white font-medium hover:bg-blue-600 transition ${styles}`}
    >
      {title}
    </button>
  );
};

export default Button;
