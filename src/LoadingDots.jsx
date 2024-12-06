import React from 'react';

const LoadingDots = () => {
  return (
    <div className="flex justify-center items-center gap-1 h-full">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="w-[3px] h-5 bg-gray-800 rounded-full animate-beat"
          style={{
            animationDelay: `${i * 150}ms`,
          }}
        />
      ))}
    </div>
  );
};

export default LoadingDots;