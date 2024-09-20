import React from 'react';
import ImageCard from './ImageCard/ImageCard';
import css from './ImageGallery.module.css';

interface APIImage {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
}

interface ImageGalleryProps {
  images: APIImage[];
  onImageClick: (image: APIImage) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onImageClick }) => {
  if (images.length === 0) return null;

  return (
    <ul className={css.ImageGallery}>
      {images.map(image => (
        <li className={css.ImageCard} key={image.id}>
          <ImageCard image={image} onClick={() => onImageClick(image)} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;