import React from "react";
import BookCard from "./BookCard"; // Adjust path if needed

export default function BooksPage() {
  const books = [
    {
      title: "Atomic Habits",
      author: "James Clear",
      image: "https://m.media-amazon.com/images/I/81F90H7hnML.jpg",
      badge: "Popular",
    },
    {
      title: "Deep Work",
      author: "Cal Newport",
      image: "",
    },
  ];

  return (
    <div className="pt-4 pb-20 px-4 min-h-screen bg-gray-50 text-gray-800">
      <h1 className="text-xl font-semibold mb-4">📚 Books</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {books.map((book, i) => (
          <BookCard
            key={i}
            title={book.title}
            author={book.author}
            image={book.image}
            badge={book.badge}
          />
        ))}
      </div>
    </div>
  );
}
