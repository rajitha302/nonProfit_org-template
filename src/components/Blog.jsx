import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import sanityClient from "../client.js";
import blog1 from "../assets/default_b1.png";
import blog2 from "../assets/default_b2.png";
import blog3 from "../assets/default_b3.png";

const Blog = () => {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"][0..2]{
        title,
        slug,
        publishedAt,
        mainImage{
          asset->{
          _id,
          url
        }
      }
    }`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

  return (
    <section className='bg-white'>
      <div className='container mx-auto section mt-5'>
        <h2 className='section-title'>From Our Blog</h2>

        <div className='flex flex-col space-y-4 mt-10 md:flex-row md:space-y-0 md:space-x-6 md:justify-center'>
          {allPostsData &&
            allPostsData.map((post, index) => (
              <Link to={"/" + post.slug.current} key={post.slug.current} className='card w-full overflow-hidden md:h-full hover:shadow-lg hover:shadow-sky-100 transition-all'>
                <figure>
                  <img src={post.mainImage.asset.url} alt='event1' className='w-full h-48 md:h-56 object-cover' />
                  <div className='p-5'>
                    <div className='flex justify-between'>
                      <span className='flex items-center'>
                        <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4 text-zinc-500' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' />
                        </svg>

                        <span className='text-sm ml-2 text-zinc-600'>{moment(post.publishedAt).format("MMM Do YY")}</span>
                      </span>
                      <span className='flex items-center'>
                        <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4 text-zinc-500' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
                        </svg>

                        <time className='text-sm ml-2 text-zinc-600'>{moment(post.publishedAt).startOf("hour").fromNow()}</time>
                      </span>
                    </div>
                    <figcaption className='mt-5 text-gray-800 truncate underline underline-offset-2 md:text-lg'>{post.title}</figcaption>
                  </div>
                </figure>
              </Link>
            ))}
        </div>
        <Link to='/blog'>
          <h5 className='underline underline-offset-2 text-blue-600 mt-10 text-center md:text-xl'>View More</h5>
        </Link>
      </div>
    </section>
  );
};

export default Blog;
