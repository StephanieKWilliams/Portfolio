import React from 'react'
import { Link } from 'react-router-dom';

const drawer = ({ isOpen, onClose }) =>  {
  return (
    <div>
          {/* Fixed container for the drawer */}
      <div className={`fixed inset-0 z-50 overflow-y-auto ${isOpen ? 'block' : 'hidden'} lg:hidden`} onClick={onClose}>
        {/* Overlay to darken the background */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <input id="my-drawer" type="checkbox" className="drawer-toggle" checked={isOpen} onChange={onClose} />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer" ></label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {/* Sidebar content here */}
               <li><Link to="/">Home</Link></li>
               <li><Link to="/">Services</Link></li>
               <li><Link to="/about">About Me</Link></li>
               <li><Link to="/">Contact Me</Link></li>
               <li><Link to="/experience">Experience</Link></li>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default drawer
