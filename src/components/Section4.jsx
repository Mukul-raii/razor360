import React from 'react';

const Section4 = () => {
  return (
    <div className="bg-orange-50 max-sm:bg-white py-16 flex justify-center ">
      <div className="max-w-5xl w-full flex flex-col max-sm:flex-col-reverse md:flex-row items-center bg-white rounded-lg shadow-lg p-8">
        {/* Left Section - Testimonial */}
        <div className="md:w-1/2 p-4">
          <h2 className="text-lg font-semibold text-primary max-sm:font-semibold">Demos booked per month:</h2>
          <h1 className="text-3xl  mb-4">from 0 to 50</h1>
          <p className="text-primary mb-4">
            “<span className='font-bold'>The results with dofollow.com have been incredible.</span> From organic traffic we went from booking zero demos
            a month to now over 50 a month. I can't speak highly enough about the dofollow.com team and the amazing
            work that they've done.”
          </p>
          {/* User Info */}
          <div className="flex items-center mt-4">
            <img
              src="https://via.placeholder.com/50" // Placeholder for profile image
              alt="Trevor Larson"
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <p className="font-semibold">Trevor Larson</p>
              <p className="text-sm text-gray-500">Co-Founder & CEO | Nectar</p>
            </div>
          </div>
        </div>

        {/* Right Section - Video */}
        <div className="md:w-1/2  max-sm:w-full max-sm:mt-0 p-4 mt-8 md:mt-0">
          <div className="relative">
            <iframe
              width="100%"
              height="250"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with actual video URL
              title="Video Testimonial"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
