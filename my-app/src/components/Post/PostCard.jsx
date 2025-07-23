import React from "react";
import IconButton from "../../utilitis/IconButton";
import { FaRegCommentDots, FaShoppingCart } from "react-icons/fa"; // For Review
import { MdRepeat } from "react-icons/md";         // For Repost
import { BiShareAlt } from "react-icons/bi";       // For Share
import ActionMenuButton from "../../utilitis/ActionMenuButton";

export default function PostCard({ post }) {
    const isMobile = window.innerWidth < 768;
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
        <IconButton
          icon={<FaRegCommentDots size={isMobile ? 16 : 18} />}
          label="Review"
          className="flex-1"
        />
        {/* <IconButton
          icon={<FaShoppingCart size={isMobile ? 16 : 18} />}
          label="Buy"
          className="flex-1"
        /> */}
        <ActionMenuButton isMobile={isMobile} />
        <IconButton
          icon={<MdRepeat size={isMobile ? 16 : 18} />}
          label="Repost"
          className="flex-1"
        />
        <IconButton
          icon={<BiShareAlt size={isMobile ? 16 : 18} />}
          label="Share"
          className="flex-1"
        />
      </div>
    </div>
  );
}
