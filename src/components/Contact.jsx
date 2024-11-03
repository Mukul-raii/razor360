import React from 'react';

import { Check, Plus } from 'lucide-react';

const ContactSection = () => {
  return (
    <div  className='bg-white justify-center items-center px-60 h-[355px]'>

    <div className="bg-secondry py-5 h-full text-center flex flex-col rounded-lg flex-start items-center">
      <h3 style={{ color: '#ad3190' }} className="text-purple-600 uppercase text-sm font-medium ">
        INTERESTED?
      </h3>
      <h2 className="text-4xl font-bold my-3 text-purple-950 ">
        Let's talk links!
      </h2>
      <button className="bg-yellow-500 w-[230px] hover:bg-yellow-600 text-purple-950 font-semibold mt-7 py-3 px-8 rounded-md transition-colors">
        Request Pricing
      </button>

      {/* Bottom section with checkmarks */}
      <div className="bg-contactSecondry rounded-b-lg w-full mt-10 py-8 px-4">
        <p className="text-white mb-6">During our chat, we'll look at:</p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-white">
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5" />
            <span>Your SEO setup</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5" />
            <span>What you want to achieve</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5" />
            <span>Whether dofollow.com is the right team for you</span>
          </div>
        </div>
      </div>
    </div>
    </div>

  );
};

export default ContactSection;