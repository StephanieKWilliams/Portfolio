import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  useEffect(() => {
    document.title = "Not Found - Ajib Gathoni";
  }, []);

  return (
    <>
      <div className="flex justify-center items-center min-h-screen text-center">
        <div className="error-container px-5 text-2xl flex flex-col justify-center items-center gap-5">
          {/* Use an img tag to display the GIF */}
          <img src="https://res.cloudinary.com/dsnzpqfvd/image/upload/v1722675332/346709633658404_Error_Page_ecfh60.gif" alt="" loop={true} autoplay={true} />

          <h2 className="title-font text-2xl font-medium">
            Something's not right.
          </h2>
          <p>Try again in a bit.
            <Link to="/" className="text-blue-500 hover:text-blue-300">Go to Home</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Error404;
