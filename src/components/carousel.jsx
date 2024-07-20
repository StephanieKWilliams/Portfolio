import React from 'react';
import Cards from './cards.jsx';

function Carousel() {

  return (
    
    <div className="flex flex-wrap justify-center items-stretch">
      {/* Grid container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-full">
     
         {/* Carousel items */}
         <div className="carousel-item">
          <Cards 
            imgSrc="https://res.cloudinary.com/dsnzpqfvd/image/upload/v1720015108/WhatsApp_Image_2024-07-03_at_15.45.07_dqmzy3.jpg" 
            altText="Image 1 Description" 
            title="Card Title 1" 
            description="This is the first card." 
            buttonText="Action 1" 
          />
        </div>

        <div className="carousel-item">
          <Cards 
            imgSrc="https://res.cloudinary.com/dsnzpqfvd/image/upload/v1720428105/WhatsApp_Image_2024-07-08_at_11.32.25_yjpivb.jpg" 
            altText="Image 1 Description" 
            title="Card Title 2" 
            description="This is the first card." 
            buttonText="Action 1" 
          />
        </div>
        
        <div className="carousel-item">
          <Cards 
            imgSrc="https://res.cloudinary.com/dsnzpqfvd/image/upload/v1720691715/WhatsApp_Image_2024-07-11_at_12.51.28_1_dld37r.jpg" 
            altText="Image 1 Description" 
            title="Card Title 3" 
            description="This is the first card." 
            buttonText="Action 1" 
          />
        </div>
        <div className="carousel-item">
          <Cards 
            imgSrc="https://res.cloudinary.com/dsnzpqfvd/image/upload/v1720015108/WhatsApp_Image_2024-07-03_at_15.45.07_dqmzy3.jpg" 
            altText="Image 1 Description" 
            title="Card Title 1" 
            description="This is the first card." 
            buttonText="Action 1" 
          />
        </div>

        <div className="carousel-item">
          <Cards 
            imgSrc="https://res.cloudinary.com/dsnzpqfvd/image/upload/v1720428105/WhatsApp_Image_2024-07-08_at_11.32.25_yjpivb.jpg" 
            altText="Image 1 Description" 
            title="Card Title 2" 
            description="This is the first card." 
            buttonText="Action 1" 
          />
        </div>
        
        <div className="carousel-item">
          <Cards 
            imgSrc="https://res.cloudinary.com/dsnzpqfvd/image/upload/v1720691715/WhatsApp_Image_2024-07-11_at_12.51.28_1_dld37r.jpg" 
            altText="Image 1 Description" 
            title="Card Title 3" 
            description="This is the first card." 
            buttonText="Action 1" 
          />
        </div>

     
        {/* More carousel items */}
        </div>
     </div>
   
  );
}

export default Carousel;
