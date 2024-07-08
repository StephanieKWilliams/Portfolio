import React from 'react'


function about() {
  return (
  <div>
     <div className="card lg:card-side bg-base-100 shadow-xl p-4 m-2">
        <figure className="rounded-lg overflow-hidden">
          <img
            src="https://res.cloudinary.com/dsnzpqfvd/image/upload/v1720428105/WhatsApp_Image_2024-07-08_at_11.32.25_yjpivb.jpg"
            alt="Album"
            className="w-full h-auto rounded-lg" />
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title text-center font-bold text-xl mb-2 md:text-center">About Me 😉</h2>
          <p className="text-gray-700 md:text-center">Something yada yada yada.</p>
          <div className="card-actions justify-end mt-4">
            <button className="btn btn-primary">Click Me</button>
    </div>
  </div>
</div>

      
    </div>
  )
}

export default about
