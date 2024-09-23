import React from 'react';
import ImageCard from './ImageCard/ImageCard';
import css from './ImageGallery.module.css';

export interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
  user: {
    name: string;
  };
  likes: number;
}

interface ImageGalleryProps {
  images: Image[];  
  onImageClick: (image: Image) => void; 
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