import React from "react";

const Button = ({ text, bgColor = "blue", color = "white", onClick, size = "md", rounded = "md" }) => {
  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg",
  };

  const roundedStyles = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-full",
  };

  return (
    <button
      onClick={onClick}
      className={`${sizes[size]} ${roundedStyles[rounded]} bg-${bgColor}-500 text-${color}-100 hover:opacity-90 transition-all`}
    >
      {text}
    </button>
  );
};

export default Button;
