import React from "react";
import PostCard from "./Post/PostCard";

const dummyPosts = [
  {
    id: 1,
    name: "Vivek Prajapat",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    time: "1h ago",
    caption: "Highly recommend 'Deep Work' for focus & productivity.",
    image: "https://images.unsplash.com/photo-1626808642875-0aa545482dfb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Riya Sharma",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    time: "3h ago",
    caption: "Uploaded Class 12 Physics handwritten notes. DM if helpful!",
    image: null, // No image here
  },
];


export default function Feed() {
  return (
    <div className="px-4 py-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Feed</h1>

      {dummyPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
