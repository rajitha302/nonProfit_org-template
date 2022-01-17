import React from "react";
import aboutBanner from "../assets/about-banner.png";
import aboutBannerMobile from "../assets/about-banner-mobile.png";

const About = () => {
  return (
    <section id='about' className='flex flex-col mt-20 md:flex-row md:container md:mx-auto md:section md:justify-around'>
      <img src={aboutBanner} alt='aboutBanner' className='w-full h-auto hidden md:block' />
      <img src={aboutBannerMobile} alt='aboutBanner' className='w-full h-auto md:hidden' />
      <div className='section bg-white md:px-20'>
        <h2 className='section-title md:text-left'>About Us</h2>

        <p className='text-gray-700 text-align mt-5 md:mt-10 md:text-justify'>
          <span className='text-md text-blue-500 md:text-xl md:font-medium'>AKASA</span> or ‘the sky' in Sinhala, is the acronym for Aabadha Sahitha Kanthawange Sangamaya, the Sinhalese for the
          Association of Women with Disabilities . It is a network of self help groups of persons with disabilities or family members of persons with disabilities, with an emphasis on women with
          disabilities or female family members of persons with disabilities. The Executive Committee comprises solely of women with disabilities or female guardians of severely impaired persons with
          disabilities or children with disabilities. AKASA works in the rural areas and focuses on poorer communities. AKASA follows a rights-based, bottom-up approach.
        </p>
      </div>
    </section>
  );
};

export default About;
