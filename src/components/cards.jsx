import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram ,  FaTiktok } from 'react-icons/fa';
// Define the Cards component to accept props
function cards({ imgSrc, altText, title, description, buttonText , socialLinks}) {
  return (
    <div className="card  bg-base-100 image-full w-96  p-4 m-2">
      <figure>
        <img src={imgSrc} alt={altText} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">{buttonText}</button>
        </div>
        <div className="flex justify-evenly mt-4">
          {socialLinks && (
            <>
              {socialLinks.facebook && (
                <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="text-gray-700 hover:text-blue-800" size={24} />
                </a>
              )}
              {socialLinks.twitter && (
                <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="text-gray-700  hover:text-blue-500" size={24} />
                </a>
              )}
              {socialLinks.instagram && (
                <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-gray-700 hover:text-pink-600" size={24} />
                </a>
              )}
               {socialLinks.tiktok && (
                <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer">
                  <FaTiktok className="text-gray-700 hover:text-pink-600" size={24} />
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default cards;
