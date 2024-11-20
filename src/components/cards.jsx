import React from 'react';

// Define the Cards component to accept props
function cards({ imgSrc, altText, title, description, buttonText }) {
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
      </div>
    </div>
  );
}

export default cards;
