import React from 'react'
import PropTypes from 'prop-types'
import ImageGallery from 'react-image-gallery';

const Gallery = ({images}) => {
  console.log(images)
  return (
    <ImageGallery items={images} />
  );
}

Gallery.propTypes = {
  images: PropTypes.any
}

export default Gallery
