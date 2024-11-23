import React from 'react';
import Cards from './cards.jsx';
import { motion } from "framer-motion";
import { animationVariants } from "./animationVariants";
function Carousel() {
  return (
    <div className="flex justify-center items-center py-4">
      {/* Grid container */}
      <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.zoomOut}
          viewport={{ once: true, amount: 0.1 }}
          style={{ boxShadow: "0 20px 50px rgba(0, 43, 86, .1)" }}
          className="flex justify-center items-center py-4"
        >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-screen-xl px-4">
        {/* Carousel items */}
       
        <div className="carousel-item">
          <Cards 
            imgSrc="https://res.cloudinary.com/dsnzpqfvd/image/upload/v1720428105/WhatsApp_Image_2024-07-08_at_11.32.25_yjpivb.jpg" 
            altText="Image 1 Description" 
            title="Card Title 1" 
            description="This is the second card." 
            buttonText="Action 1" 
            socialLinks={{
              facebook: 'https://www.facebook.com/ajibgathonitiktok/',
              instagram: 'https://www.instagram.com/ajib_gathoni/?hl=en',
              tiktok: 'https://www.tiktok.com/@ajibgathoni?lang=en'
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
              facebook: 'https://www.facebook.com/ajibgathonitiktok/',
              instagram: 'https://www.instagram.com/ajib_gathoni/?hl=en',
              tiktok: 'https://www.tiktok.com/@ajibgathoni?lang=en'
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
              facebook: 'https://www.facebook.com/ajibgathonitiktok/',
              instagram: 'https://www.instagram.com/ajib_gathoni/?hl=en',
              tiktok: 'https://www.tiktok.com/@ajibgathoni?lang=en'
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
              facebook: 'https://www.facebook.com/ajibgathonitiktok/',
              instagram: 'https://www.instagram.com/ajib_gathoni/?hl=en',
              tiktok: 'https://www.tiktok.com/@ajibgathoni?lang=en'
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
              facebook: 'https://www.facebook.com/ajibgathonitiktok/',
              instagram: 'https://www.instagram.com/ajib_gathoni/?hl=en',
              tiktok: 'https://www.tiktok.com/@ajibgathoni?lang=en'
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
              facebook: 'https://www.facebook.com/ajibgathonitiktok/',
              instagram: 'https://www.instagram.com/ajib_gathoni/?hl=en',
              tiktok: 'https://www.tiktok.com/@ajibgathoni?lang=en'
            }}
          />
        </div>
       
      </div>
      </motion.div>
    </div>
  );
}

export default Carousel;
