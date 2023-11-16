import React from "react";

const Tab = ({ onClick, isActive, children }) => {
  return (
    <button
      onClick={onClick}
      className={`w-1/4 pb-8 ${isActive ? "border-b-4 border-orange-100" : ""}`}
    >
      {children}
    </button>
  );
};

export default Tab;
