import React from "react";

import { useEffect } from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  useEffect(() => {
    document.title = "Not Found - Ajib Gathoni";
  }, []);

  return (
    <>
      
      <div className="flex justify-center items-center min-h-screen text-center">
        <div className="error-container px-5 text-2xl flex flex-col justify-center items-center gap-5">
          <h1 className="text-9xl font-semibold text-red-500">404</h1>
          <h2 className="title-font text-4xl font-medium">
            Something's not right.
          </h2>
          <p>Try again in a bit.
          {/* <Link to="/" className="text-blue-500 hover:text-blue-700">Go to Home</Link> */}
          </p>
        </div>
      </div>
    </>
  );
};

export default Error404;
