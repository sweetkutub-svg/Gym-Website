import React, { useState } from 'react';
import './Gallery.css';

const images = [
  { src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80', span: 'tall' },
  { src: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80', span: '' },
  { src: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80', span: '' },
  { src: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=80', span: 'wide' },
  { src: 'https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?w=600&q=80', span: '' },
  { src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80', span: 'tall' },
  { src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80', span: '' },
];

const Gallery = () => {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="gallery-header">
          <span className="section-tag reveal">Gallery</span>
          <h2 className="gallery-title reveal">
            Life At<br /><span className="text-yellow">FitForge</span>
          </h2>
        </div>

        <div className="gallery-grid">
          {images.map((img, i) => (
            <div
              className={`gallery-item reveal-scale ${img.span}`}
              key={i}
              style={{ transitionDelay: `${i * 0.08}s` }}
              onClick={() => setLightbox(img.src)}
            >
              <img src={img.src} alt={`Gallery ${i + 1}`} loading="lazy" />
              <div className="gallery-hover">
                <span>+</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox-close">✕</button>
          <img src={lightbox} alt="Full" />
        </div>
      )}
    </section>
  );
};

export default Gallery;
