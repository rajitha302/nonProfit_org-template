import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import moment from "moment";
import event1 from "../assets/default_e1.png";
import event2 from "../assets/default_e2.png";
import event3 from "../assets/default_e3.png";

const Events = () => {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'event'] | order(_createdAt desc)[0..2]{
        title,
        slug,
        eventDate,
        location,
        mainImage{
          asset->{
          _id,
          url
        }
      }
    }`
      )
      .then((data) => setEvents(data))
      .catch(console.error);
  }, []);

  console.log("events", events);

  return (
    <section className='bg-sky-50'>
      <div className='section mt-60 md:container md:mx-auto md:mt-20'>
        <h2 className='section-title md:text-left'>Upcoming Events</h2>
        <div className='flex flex-col space-y-4 mt-10 md:flex-row md:space-y-0 md:space-x-6'>
          {events &&
            events.map((event, index) => (
              <figure className='card w-full overflow-hidden md:h-full md:w-1/3 hover:shadow-lg hover:shadow-sky-100 transition-all' key={index}>
                <img src={event.mainImage.asset.url} alt='event1' className='w-full h-48 md:h-56 object-cover' />
                <div className='p-5'>
                  <div className='flex flex-col space-y-3 align-middle'>
                    <div className='flex flex-col justify-between md:flex-row'>
                      <span className='flex items-center'>
                        <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4 text-zinc-500' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' />
                        </svg>

                        <span className='text-sm ml-2 text-zinc-600'>
                          <span className='mr-2 font-medium'>Event Date: </span>
                          {moment(event.eventDate).format("MMM Do YY")}
                        </span>
                      </span>

                      <span className='flex items-center'>
                        <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4 text-zinc-500' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
                        </svg>

                        <span className='text-sm ml-2 text-zinc-600 break-all truncate'>
                          <span className='mr-2 font-medium'>Time: </span>
                          {moment(event.eventDate).format("LT")}
                        </span>
                      </span>
                    </div>
                    <span className='flex items-center'>
                      <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4 text-zinc-500' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
                      </svg>

                      <span className='text-sm ml-2 text-zinc-600 break-all truncate'>
                        <span className='mr-2 font-medium'>Location: </span>
                        {/* {moment(event.eventDate).format("LT")} */}
                        {event.location}
                      </span>
                    </span>
                  </div>
                  <figcaption className='mt-5 text-gray-800 underline underline-offset-2 md:text-lg'>{event.title}</figcaption>
                  <button className='w-full bg-sky-900 text-cyan-50 py-3 mt-5 hover:bg-sky-200 hover:text-gray-800 transition-all'>Register Now</button>
                </div>
              </figure>
            ))}
        </div>
        <a href='https://www.facebook.com/akasa.lk' target='_blank' rel='noreferrer'>
          <h5 className='text-gray-800 mt-10 text-center md:text-xl'>
            See more on our <span className='underline underline-offset-2 text-blue-600'>Facebook page</span>
          </h5>
        </a>
      </div>
    </section>
  );
};

export default Events;
