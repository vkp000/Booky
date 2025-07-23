import React from "react";

export default function IconButton({
  icon,               // Can be React element OR string
  label,
  onClick,
  className = "",
  iconClass = "",
  direction = "column", // 'row' or 'column'
  labelClass = "",
  disabled = false,
}) {
  const isRow = direction === "row";

  const renderIcon = () => {
    if (typeof icon === "string") {
      return <img src={icon} alt={label} className={`w-5 h-5 ${iconClass}`} />;
    } else if (React.isValidElement(icon)) {
      return <span className={`${iconClass}`}>{icon}</span>;
    }
    return null;
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${isRow ? "flex-row space-x-2" : "flex-col space-y-1"}
        flex items-center justify-center text-sm text-gray-600
        hover:bg-gray-200 hover:text-blue-600 transition rounded-md
        py-2 px-3 ${className}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
      `}
    >
      {renderIcon()}
      {label && <span className={labelClass}>{label}</span>}
    </button>
  );
}
