import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="flex-1 overflow-auto relative z-10 flex items-center justify-center h-screen px-6">
      <main className="text-center p-6 shadow-lg rounded-lg max-w-md border border-gray-500 ">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="mt-4 ">
          Oops! The page you’re looking for doesn’t exist.
        </p>
        <button
          onClick={handleGoHome}
          className="mt-6 px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 transition duration-200"
        >
          Go Back to Home
        </button>
      </main>
    </div>
  );
};

export default PageNotFound;
