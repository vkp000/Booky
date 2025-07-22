import React from "react";

export default function PostCard({ post }) {
  return (
    <div className="bg-white rounded-md shadow-sm p-4 mb-4">
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <img
          src={post.avatar}
          alt="user"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-sm">{post.name}</h4>
          <p className="text-xs text-gray-500">{post.time}</p>
        </div>
      </div>

      {/* Caption */}
      <p className="text-sm text-gray-800 mb-3">{post.caption}</p>

      {/* Image (optional) */}
      {post.image && (
        <img
          src={post.image}
          alt="post"
          className="w-full rounded-md mb-3 max-h-[400px] object-cover"
        />
      )}

      {/* Actions */}
      <div className="flex text-sm text-gray-600 border-t pt-2">
        <button className="flex-1 text-center py-2 hover:bg-gray-200 hover:text-blue-600 transition rounded-md flex flex-col items-center">
          <img src="/icons/review.png" alt="Review" className="w-5 h-5 mb-1" />
          Review
        </button>
        <button className="flex-1 text-center py-2 hover:bg-gray-200 hover:text-blue-600 transition rounded-md flex flex-col items-center">
          <img src="/icons/repost.png" alt="Repost" className="w-5 h-5 mb-1" />
          Repost
        </button>
        <button className="flex-1 text-center py-2 hover:bg-gray-200 hover:text-blue-600 transition rounded-md flex flex-col items-center">
          <img src="/icons/share.png" alt="Share" className="w-5 h-5 mb-1" />
          Share
        </button>
      </div>
    </div>
  );
}
