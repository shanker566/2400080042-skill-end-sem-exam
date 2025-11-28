import React from "react";

const Card = ({ title, children, bgColor = "white", textColor = "black", border = true }) => {
  return (
    <div
      className={`p-4 shadow-md ${border ? "border" : ""} bg-${bgColor}-100 text-${textColor}-800 rounded-xl`}
    >
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <div>{children}</div>
    </div>
  );
};

export default Card;
