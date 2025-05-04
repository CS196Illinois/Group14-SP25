import React from 'react';

function Card({ img, title }) {
  return (
    <div className="text-center">
      <img
        src={img}
        alt="feature"
        className="w-3/4 h-auto object-cover rounded mb-4 mx-auto"
      />
      <h3 className="font-semibold text-lg">{title}</h3>
    </div>
  );
}

export default Card;