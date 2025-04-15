import React from 'react';

export const NewImageCard = ({ imageUrl, altText = "image"}) => {
    return (
      <div className="max-w-none mx-auto overflow-hidden shadow-lg bg-transparent rounded-lg h-full">
        <div className="relative w-screen h-screen" >
          <img
            src={imageUrl}
            alt={altText}
            className={`w-full h-full object-contain`}
            loading='lazy'
          />
        </div>
    </div>
  );
};