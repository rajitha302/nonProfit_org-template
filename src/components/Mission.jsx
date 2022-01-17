import React from "react";

const Mission = () => {
  return (
    <section className='bg-sky-50'>
      <div className='section md:container md:mx-auto mt-5'>
        <div className='mt-5'>
          <h2 className='section-title md:text-left'>Our Vision</h2>
          <h6 className='text-sky-900 font-medium text-xl mt-5 md:text-6xl md:mt-10'>A society with equal opportunities for full participation is available to all.</h6>
        </div>
        <div className='md:mt-10 md:flex'>
          <div className='mt-5 md:pr-20'>
            <h2 className='section-title md:text-left'>Our Mission</h2>
            <p className='text-gray-700 text-justify mt-5 md:mt-10'>
              We support people with disabilities in Sri Lanka in order to protect them from economic, political, cultural and social discrimination. We encourage them to develop their skills,
              abilities and talents in order to obtain equal opportunities for full participation in society and help them to live as independent, self-reliant citizens of Sri Lanka.
            </p>
          </div>
          <div className='mt-5'>
            <h2 className='section-title md:text-left'>Our Goal</h2>
            <ul className='marker:text-sky-900 list-disc pl-5 space-y-3 text-gray-700 mt-5 md:mt-10 md:marker:text-2xl'>
              <li>To prevent people with disabilities in Sri Lanka from being discriminated against, economically, socially, politically, educationally and culturally.</li>
              <li>To provide them with equal opportunities in society.</li>
              <li>
                To create awareness among the families of persons with disabilities and the general public in Sri Lanka, about the needs of people with disabilities, so that people can begin to
                understand them and care for them.
              </li>
              <li>To help people with disabilities to live an independent life.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
