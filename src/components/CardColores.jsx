import React, { useState } from 'react';

const CardColores = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-40 h-40 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      <div
        className={`absolute inset-0 w-full h-full bg-blue-900 transition-transform duration-500 ${
          isHovered ? 'transform -translate-y-full' : ''
        }`}
      />
    </div>
  )
}

export default CardColores