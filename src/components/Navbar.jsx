import React, { useState } from "react";
import logo from "../assets/logo.png";
// import { Link } from "react-router-dom";
import { NavHashLink as Link } from "react-router-hash-link";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    open: { y: 0 },
    closed: { y: -300 },
  };

  return (
    <motion.nav className='bg-white shadow-md fixed w-full z-10' initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.8 }}>
      <div className='container mx-auto flex items-center md:justify-between p-3'>
        {/* logo */}

        <Link to='/' className='w-11/12 md:w-1/3 flex justify-center md:justify-start'>
          <img src={logo} alt='logo' className='w-1/3 h-auto' />
        </Link>

        {/* desktop-menu */}
        <div className='space-x-8 hidden md:flex'>
          <Link to='/#about' className='text-lg hover:text-sky-900 transition-all'>
            About Us
          </Link>
          <Link to='/blog' className='text-lg hover:text-sky-900 transition-all'>
            Akasa Blog
          </Link>
          <Link to='/#contact' className='text-lg hover:text-sky-900 transition-all'>
            Contact Us
          </Link>
        </div>
        {/* menu-icon */}

        <div className='w-1/12 flex justify-center md:hidden'>
          <button onClick={() => setOpen(!open)}>
            <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16m-7 6h7' />
            </svg>
          </button>
        </div>

        <motion.div
          className={`absolute top-0 left-0 w-full h-auto z-10 space-y-2 p-3 md:hidden bg-sky-50 transition-all duration-100 ${open === true ? "block shadow-lg" : "hidden"}`}
          animate={open ? "open" : "closed"}
          variants={variants}
          transition={{ duration: 0.4 }}>
          <div className='flex justify-end'>
            <button onClick={() => setOpen(!open)}>
              <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
              </svg>
            </button>
          </div>
          <div className='divide-y divide-gray-300'>
            <Link to='/#about' className='block text-lg text-center py-5'>
              About Us
            </Link>
            <Link to='/blog' className='block text-lg text-center py-5'>
              Akasa Blog
            </Link>
            <Link to='/#contact' className='block text-lg text-center py-5'>
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
