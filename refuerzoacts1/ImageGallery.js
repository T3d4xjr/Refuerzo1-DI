import { useState } from 'react';

function Image({ src, alt }) {
    
  return <img src={src} alt={alt} width="200" height="200" />;
}

export default function ImageGallery({ imagenes }) {
    const imagenes = [
        { src: '', alt: 'Imagen 1' },
        { src: '', alt: 'Imagen 2' },
        { src: '', alt: 'Imagen 3' },
      ];
  return (
    <div>
      {imagenes.map((imagen, index) => (
        <Image 
        key={index} 
        src={imagen.src} 
        alt={imagen.alt} />
      ))}
    </div>
  );
}
