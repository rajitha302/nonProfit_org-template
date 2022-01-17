import React from "react";
import { NavHashLink as Link } from "react-router-hash-link";
import { motion } from "framer-motion";
import banner from "../assets/banner.png";

const Banner = () => {
  return (
    <section className='relative md:pt-20'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className='md:container md:mx-auto md:static md:flex md:justify-center md:flex-row-reverse md:items-center'>
        <img
          // initial={{ opacity: 0, y: 100 }}
          // animate={{ opacity: 1, y: 0 }}
          // transition={{ delay: 0.8, duration: 1.2 }}
          src={banner}
          alt='banner'
          className='min-w-full h-auto object-contain md:w-1/3 md:mt-14 md:min-w-0'
        />
        <div className='bg-white p-5 shadow-md m-5 absolute top-2/3 md:w-1/2 md:static md:h-1/2 md:shadow-none'>
          <h1 className='text-sky-900	font-medium text-2xl md:text-5xl'>A society with equal opportunities </h1>
          <p className='text-gray-700 text-justify mt-5 md:text-lg md:pr-10'>
            Akasa is a network of self help groups of persons with disabilities or family members of persons with disabilities, with an emphasis on women with disabilities or female family members of
            persons with disabilities.
          </p>
          <div className='flex justify-center mt-5 md:justify-start'>
            <Link to='/#contact'>
              <button className='bg-sky-200 shadow-md shadow-sky-100 py-4 px-10 md:text-lg hover:bg-sky-900 hover:text-white hover:shadow-lg hover:shadow-sky-200 transition-all'>
                Join as a Member
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Banner;
