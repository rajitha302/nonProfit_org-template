import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";

const Featured = () => {
  const [allLinks, setAllLinks] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "featured"] | order(_createdAt desc) [0..2]{
          title,
          url
      }
    `
      )
      .then((data) => setAllLinks(data))
      .catch(console.error);
  }, []);

  return (
    <section className='bg-sky-50'>
      <div className='container mx-auto section'>
        <h2 className='section-title'>Featured On</h2>
        <div className='flex flex-col space-y-4 mt-10 md:flex-row md:justify-center md:items-center md:space-y-0 md:space-x-3'>
          {allLinks ? (
            allLinks.map((link, index) => (
              <div className='col-auto w-full' key={index}>
                <iframe
                  className='w-full aspect-video'
                  src={link.url}
                  title='YouTube video player'
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'></iframe>
              </div>
            ))
          ) : (
            <h5>No Featured items added</h5>
          )}
        </div>
      </div>
    </section>
  );
};

export default Featured;
