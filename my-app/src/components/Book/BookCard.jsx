import React from "react";

export default function BookCard({
  title = "Untitled Book",
  author = "Unknown Author",
  image = "",
  badge = "",
  onClick = () => {},
}) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl shadow p-3 hover:shadow-md transition duration-200 cursor-pointer"
    >
      <div className="relative w-full h-32 bg-gray-200 rounded-lg overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400 text-sm">
            No Image
          </div>
        )}

        {badge && (
          <span className="absolute top-1 left-1 bg-blue-600 text-white text-xs px-2 py-0.5 rounded">
            {badge}
          </span>
        )}
      </div>

      <div className="mt-2">
        <h2 className="text-sm font-medium truncate">{title}</h2>
        <p className="text-xs text-gray-500 truncate">{author}</p>
      </div>
    </div>
  );
}
