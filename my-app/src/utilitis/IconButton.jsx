import React from "react";

export default function IconButton({
  icon,
  label,
  onClick,
  className = "",
  iconClass = "",
  direction = "column", // 'row' or 'column'
  labelClass = "",
  disabled = false,
  children,
}) {
  const isRow = direction === "row";

  const renderIcon = () => {
    if (typeof icon === "string") {
      const isImage =
        icon.startsWith("http") ||
        icon.endsWith(".png") ||
        icon.endsWith(".jpg") ||
        icon.endsWith(".jpeg") ||
        icon.endsWith(".svg") ||
        icon.endsWith(".webp");

      if (isImage) {
        return <img src={icon} alt={label} className={`w-5 h-5 ${iconClass}`} />;
      }

      return <span className={`text-lg ${iconClass}`}>{icon}</span>;
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
        ${!children ? `
          ${isRow ? "flex-row space-x-2" : "flex-col space-y-1"}
          flex items-center justify-center text-sm text-gray-600
          hover:bg-gray-200 hover:text-blue-600 transition rounded-md
          py-2 px-3
        ` : ""}
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        ${className}
      `}
    >
      {children ? (
        children
      ) : (
        <>
          {renderIcon()}
          {label && <span className={labelClass}>{label}</span>}
        </>
      )}
    </button>
  );
}
