import React from 'react';

const ImageGallery = ({ images }) => {
  return (
    <div>
      {images.map((image, index) => (
        <img src={image} alt={`Image ${index}`} key={index} />
      ))}
    </div>
  );
};

export default ImageGallery;
