// src/pages/AddPostPage.jsx
import React, { useState } from "react";
import { FaRegFileAlt, FaRegImage } from "react-icons/fa";

const AddPostPage = () => {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Send `text` and `image` to backend
    console.log("Post submitted:", { text, image });
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Create a New Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          className="w-full p-3 border rounded resize-none"
          rows="5"
          placeholder="What's on your mind?"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <label className="flex items-center gap-2 text-blue-600 cursor-pointer">
          <FaRegImage />
          <span>Upload Image</span>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </label>
        {image && <img src={image} alt="Preview" className="w-full rounded mt-2" />}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default AddPostPage;
