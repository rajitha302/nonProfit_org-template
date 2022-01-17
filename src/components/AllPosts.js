// src/components/AllPosts.js

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";

export default function AllPosts() {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"][0..3]{
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
    <div className='container mx-auto px-4'>
      <h2>Akasa Blog</h2>
      <h3>Welcome to my blog posts page!</h3>
      <div>
        {allPostsData &&
          allPostsData.map((post, index) => (
            <Link to={"/" + post.slug.current} key={post.slug.current}>
              <div className='rounded-lg shadow-lg overflow-hidden bg-gray-100 mt-6' key={index}>
                <img src={post.mainImage.asset.url} alt='' className='h-48 w-full object-cover' />
                <div className='px-6 py-3'>
                  <h2 className='text-md'>{post.title}</h2>
                  <h2 className='text-sm'>{post.publishedAt}</h2>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
