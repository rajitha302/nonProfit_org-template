import React from "react";

const Contact = () => {
  return (
    <section id='contact'>
      <div className='container mx-auto section'>
        <h2 className='section-title md:text-left'>Contact Us</h2>
        <div className='flex flex-col md:flex-row md:space-x-20'>
          <div className='md:col-auto md:w-full'>
            <div className='flex justify-between mt-10'>
              <div className='flex items-center space-x-2 text-gray-900'>
                <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                  />
                </svg>
                <h6>Phone Number :</h6>
              </div>

              <h6 className='text-gray-900 font-medium'>+94 11 111 111</h6>
            </div>
            <div className='flex justify-between mt-3'>
              <div className='flex items-center space-x-2 text-gray-900'>
                <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
                  />
                </svg>
                <h6>Email :</h6>
              </div>

              <h6 className='text-gray-900 underline underline-offset-2 font-medium'>akasa@gmail.com</h6>
            </div>

            <div className='mt-5'>
              <iframe
                className='w-full aspect-auto'
                title='map'
                src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d92741.0625832243!2d80.3074387!3d8.2349653!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afcf1a45889d0b1%3A0x588d45bd1a224a93!2sTalawa!5e1!3m2!1sen!2slk!4v1641760716829!5m2!1sen!2slk'
                width='400'
                height='300'
                style={{ border: 0 }}
                loading='lazy'></iframe>
            </div>
          </div>

          <form action='' className='mt-20 md:col-auto md:w-full md:mt-10'>
            <label className='block'>
              <span className='block text-sm font-medium text-gray-700'>Email</span>
              <input
                type='email'
                className='peer mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
              />
              <p className='mt-2 invisible peer-invalid:visible text-pink-600 text-sm'>Please provide a valid email address.</p>
            </label>

            <label className='block'>
              <span className='block text-sm font-medium text-gray-700'>Number (optional)</span>
              <input
                type='number'
                className='peer mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
              />
              <p className='mt-2 invisible peer-invalid:visible text-pink-600 text-sm'>Please provide a valid Phone Number.</p>
            </label>

            <label className='block'>
              <span className='block text-sm font-medium text-gray-700'>Message</span>
              <textarea
                type='text'
                rows='4'
                cols='50'
                className='mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
              />
            </label>

            <button className='flex items-center py-3 px-14 bg-sky-200 mt-5'>
              <span className='mr-3'>Send</span>
              <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4 rotate-90' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8' />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
