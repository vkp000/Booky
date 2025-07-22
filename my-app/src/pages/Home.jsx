import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex flex-col justify-center items-center text-center p-6">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-blue-800">
        Welcome to ReadCycle 📚
      </h1>
      <p className="text-lg sm:text-xl text-gray-700 max-w-xl">
        A student-first platform to exchange books, share notes, and connect with fellow learners. Start your journey today!
      </p>
      
      <Link
        to="/register"
        className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-xl text-lg font-semibold hover:bg-blue-700 transition"
      >
        Register Now
      </Link>

      <p className="mt-4 text-sm text-gray-500">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-600 hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Home;
