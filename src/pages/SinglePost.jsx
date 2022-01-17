import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer.jsx";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function SinglePost() {
  const [open, setOpen] = useState(false);
  const [postData, setPostData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
            title,
            slug,
            mainImage{
              asset->{
                _id,
                url
              }
            },
            body,
            "name": author->name,
            "authorImage": author->image
          }`
      )
      .then((data) => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!postData) return <div>Loading...</div>;

  return (
    <div className='bg-gray-100'>
      <Navbar />
      <div className='min-h-screen px-5 pt-24 md:px-16 md:pt-40'>
        <div className='container shadow-lg mx-auto bg-white rounded-lg'>
          <div className='relative'>
            <div className='absolute h-full w-full flex items-center justify-center p-8'>
              {/* Title Section */}
              <div className='bg-white bg-opacity-75 rounded py-6 px-12'>
                <h4 className='cursive text-3xl lg:text-4xl mb-4'>{postData.title}</h4>
                <div className='flex justify-center text-gray-800'>
                  {postData.authorImage && <img src={urlFor(postData.authorImage).url()} className='w-10 h-10 rounded-full' alt='Author is Kap' />}
                  <h6 className='cursive flex items-center pl-2 text-xl'>by {postData.name}</h6>
                </div>
              </div>
            </div>
            <img className='w-full object-cover bg-bottom rounded-t h-80' src={urlFor(postData.mainImage).url()} alt='' />
          </div>
          <div className='px-5 lg:px-12 py-12 lg:py-20 prose lg:prose-xl max-w-full md:px-10'>
            <BlockContent blocks={postData.body} projectId='gan98wdg' dataset='production' />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
