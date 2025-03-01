import { useState, useEffect } from 'react';
import styles from './Slideshow.module.css';

const Slideshow = ({ images, transitionType = 'fade', autoPlayTime = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const nextSlide = () => {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setTransitioning(false);
    }, 5000);
  };

  const prevSlide = () => {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setTransitioning(false);
    }, 5000);
  };
  const jumpToSlide = (index) => {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setTransitioning(false);
    }, 5000);
  };
  useEffect(() => {
    const interval = setInterval(nextSlide, autoPlayTime);
    return () => clearInterval(interval);
  }, [autoPlayTime]);
  return (
    <div className={styles.slideshowContainer}>
      <div
        className={`${styles.slide} ${transitionType} ${
          transitioning ? `transitioning` : ''
        }`}
      >
        <img src={images[currentIndex]} alt='' />
      </div>
      <div className={styles.controls}>
        {/* Previous Button */}
        <button onClick={prevSlide}>&lt;</button>
        {/* Dots */}
        <div className={styles.dots}>
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => jumpToSlide(index)}
            />
          ))}
        </div>
        {/* Next Button */}
        <button onClick={nextSlide}>&gt;</button>
      </div>
    </div>
  );
};

export default Slideshow;
