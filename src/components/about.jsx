import React from 'react'
import { Link } from 'react-router-dom'; 

function about() {
  return (
  <div>
    <section id='about'>
    <h1 className="card-title text-center font-bold flex justify-center mt-8 text-4xl mb-4 md:text-center">Get to know Me 😉</h1>
     <div className="card lg:card-side bg-base-100 shadow-xl p-4 m-2">
        <figure className="rounded-lg overflow-hidden">
          <img
            src="https://res.cloudinary.com/dsnzpqfvd/image/upload/v1720428105/WhatsApp_Image_2024-07-08_at_11.32.25_yjpivb.jpg"
            alt="Album"
            className="w-full h-auto object-cover rounded-lg"  /> 
        </figure>
        <div className="card-body p-4">
         
          <p className="text-white-700 md:text-center">Something yada yada yada.</p>
          <div className="card-actions justify-end mt-4">
          <Link
                to="/contact" // Assuming /contact is the contact page route
                className="btn btn-secondary btn-outline"
              >
              Contact Me
              </Link>
          </div>
     </div>
      </div>

      </section> 
    </div>
  )
}

export default about
