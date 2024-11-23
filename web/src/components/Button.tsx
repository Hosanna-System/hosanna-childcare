// Code: Button component
import React from "react";
import "../assets/styles/Button.css";

interface ButtonProps {
  text: string;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, type = "button", className }) => {
  return (
    <button type={type} className={`btn ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
