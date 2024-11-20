import React from 'react';
import Cards from './cards.jsx';

function Carousel() {
  return (
    <div className="flex justify-center items-center py-4">
      {/* Grid container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-screen-xl px-4">
        {/* Carousel items */}
        <div className="carousel-item">
          <Cards 
            imgSrc="https://res.cloudinary.com/dsnzpqfvd/image/upload/v1720015108/WhatsApp_Image_2024-07-03_at_15.45.07_dqmzy3.jpg" 
            altText="Image 1 Description" 
            title="Card Title 1" 
            description="This is the first card." 
            buttonText="Action 1" 
            socialLinks={{
              facebook: 'https://facebook.com/yourprofile',
              twitter: 'https://twitter.com/yourprofile',
              instagram: 'https://instagram.com/yourprofile',
              tiktok: 'https://instagram.com/yourprofile'
            }}
          />
        </div>
        <div className="carousel-item">
          <Cards 
            imgSrc="https://res.cloudinary.com/dsnzpqfvd/image/upload/v1720428105/WhatsApp_Image_2024-07-08_at_11.32.25_yjpivb.jpg" 
            altText="Image 2 Description" 
            title="Card Title 2" 
            description="This is the second card." 
            buttonText="Action 2" 
            socialLinks={{
              facebook: 'https://facebook.com/yourprofile',
              twitter: 'https://twitter.com/yourprofile',
              instagram: 'https://instagram.com/yourprofile',
              tiktok: 'https://instagram.com/yourprofile'
            }}
          />
        </div>
        <div className="carousel-item">
          <Cards 
            imgSrc="https://res.cloudinary.com/dsnzpqfvd/image/upload/v1720428105/WhatsApp_Image_2024-07-08_at_11.32.25_yjpivb.jpg" 
            altText="Image 3 Description" 
            title="Card Title 3" 
            description="This is the third card." 
            buttonText="Action 3" 
            socialLinks={{
              facebook: 'https://facebook.com/yourprofile',
              twitter: 'https://twitter.com/yourprofile',
              instagram: 'https://instagram.com/yourprofile',
              tiktok: 'https://instagram.com/yourprofile'
            }}
          />
        </div>
        <div className="carousel-item">
          <Cards 
            imgSrc="https://res.cloudinary.com/dsnzpqfvd/image/upload/v1720428105/WhatsApp_Image_2024-07-08_at_11.32.25_yjpivb.jpg" 
            altText="Image 4 Description" 
            title="Card Title 4" 
            description="This is the fourth card." 
            buttonText="Action 4" 
            socialLinks={{
              facebook: 'https://facebook.com/yourprofile',
              twitter: 'https://twitter.com/yourprofile',
              instagram: 'https://instagram.com/yourprofile',
              tiktok: 'https://instagram.com/yourprofile'
            }}
          />
        </div>
        <div className="carousel-item">
          <Cards 
            imgSrc="https://res.cloudinary.com/dsnzpqfvd/image/upload/v1720428105/WhatsApp_Image_2024-07-08_at_11.32.25_yjpivb.jpg" 
            altText="Image 5 Description" 
            title="Card Title 5" 
            description="This is the fifth card." 
            buttonText="Action 5" 
            socialLinks={{
              facebook: 'https://facebook.com/yourprofile',
              twitter: 'https://twitter.com/yourprofile',
              instagram: 'https://instagram.com/yourprofile',
              tiktok: 'https://instagram.com/yourprofile'
            }}
          />
        </div>
        <div className="carousel-item">
          <Cards 
            imgSrc="https://res.cloudinary.com/dsnzpqfvd/image/upload/v1720428105/WhatsApp_Image_2024-07-08_at_11.32.25_yjpivb.jpg" 
            altText="Image 6 Description" 
            title="Card Title 6" 
            description="This is the sixth card." 
            buttonText="Action 6" 
            socialLinks={{
              facebook: 'https://facebook.com/yourprofile',
              twitter: 'https://twitter.com/yourprofile',
              instagram: 'https://instagram.com/yourprofile',
              tiktok: 'https://instagram.com/yourprofile'
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
