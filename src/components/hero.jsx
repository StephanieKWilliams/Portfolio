import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'; // Import icons

function Hero() {
  return (
    <div>
      <section id="hero">
        <div
          className="hero min-h-screen rounded-lg overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://res.cloudinary.com/dsnzpqfvd/image/upload/v1720428105/WhatsApp_Image_2024-07-08_at_11.32.25_yjpivb.jpg)',
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          {/* <div className="hero-content text-neutral-content text-botto">
            <div className="min-w-md mx-auto px-4">
              <h3 className="mb-2 text-1xl font-bold">Grow your Page</h3>
              <p className="mb-2">Let's Gooo!!</p>

            
              <Link
                to="/contact" // Assuming /contact is the contact page route
                className="btn btn-primary"
              >
                Go to Contact Page
              </Link>
            </div>
          </div> */}
        </div>
      </section>

      {/* Social Media Links - Floating at the bottom, visible only on large screens */}
      <div className="hidden lg:flex fixed bottom-8 left-1/2 transform -translate-x-1/2 space-x-6 z-50">
        {/* Instagram Link */}
        <a
          href= 'https://www.instagram.com/ajib_gathoni/?hl=en'
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl text-gray-700 hover:text-pink-500 transition duration-300"
        >
          <FaInstagram />
        </a>

        {/* TikTok Link */}
        <a
          href='https://www.tiktok.com/@ajibgathoni?lang=en'
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl text-gray-700 hover:text-black transition duration-300"
        >
          <FaTiktok />
        </a>

        {/* X (Twitter) Link */}
        <a
          href='https://www.facebook.com/ajibgathonitiktok/'
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl text-gray-700 hover:text-blue-500 transition duration-300"
        >
          <FaFacebook />
        </a>
      </div>
    </div>
  );
}


export default Hero;
