import React, { useState }  from  'react'
import Drawer from './drawer.jsx'; // Import the DrawerComponent

function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" onClick={toggleDrawer} >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
          
          </div>
          <a className="btn btn-ghost text-xl">Ajib Gathoni</a>
           </div>
        
          <div className="navbar-center hidden lg:flex">
            
            <ul className="menu menu-horizontal px-1">
            <li><a href=''>Home</a></li>
              <li><a href=''>Services</a></li>
              <li><a href=''>About Me</a></li>
              <li><a href=''>Contact Me</a></li>
            </ul>
          
          
          </div>
          <div className="navbar-end">
            <a className="btn">Book Me</a>
          </div>
          <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
        </div>
    </div>
  )
}

export default Navbar
