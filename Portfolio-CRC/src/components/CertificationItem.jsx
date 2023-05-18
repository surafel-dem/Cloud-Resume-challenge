import React from 'react';

function CertificationItem({imgUrl, link }) {
   return (

      <div className='flex flex-col items-center h-auto max-w-xs'> 
      <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="border-1 border-[#001b5e] dark:border-white rounded-md overflow-hidden"
    >
        <img
        src={imgUrl}
        alt="portfolio"
        className="object-scale-down h-40 w-40 cursor-pointer"
      />

      </a>
      </div>
   )
}

export default CertificationItem;