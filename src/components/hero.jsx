import React from 'react'
import About from './about'
import Footer from './footer'



function hero() {
  return (
    <div>
      <section id='hero'>
          <div
            className="hero min-h-screen rounded-lg overflow-hidden bg-cover bg-center"
            style={{
              backgroundImage: "url(https://res.cloudinary.com/dsnzpqfvd/image/upload/v1720428105/WhatsApp_Image_2024-07-08_at_11.32.25_yjpivb.jpg)",
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md mx-auto px-4">
                <h1 className="mb-5 text-5xl font-bold">Grow your Page</h1>
                <p className="mb-5">
                  Let's Gooo!!
                </p>
                <button className="btn btn-primary">Click Me</button>
              </div>
            </div>
          </div>
       </section> 
      
    </div>
  )
}

export default hero
