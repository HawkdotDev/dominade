import { useState } from 'react';
import Masonry from 'react-masonry-css';

const getRandomNeonColor = () => {
    const neonColors = [
      '#39FF14', // Neon Green
      '#FF073A', // Neon Red
      '#1D2D50', // Neon Blue
      '#FF00FF', // Neon Purple
      '#00FFFF', // Neon Cyan
      '#FFFF00', // Neon Yellow
      '#FF6F61', // Neon Coral
      '#E8A87C', // Neon Peach
    ];
    return neonColors[Math.floor(Math.random() * neonColors.length)];
  };

// Function to generate random dimensions for the cards
const getRandomDimensions = () => {
  // Random sizes between 200 and 300 pixels
  const width = Math.floor(Math.random() * (300 - 200 + 1)) + 200;
  const height = Math.floor(Math.random() * (300 - 200 + 1)) + 200;
  return { width, height };
};

// Function to generate a card with a special size (double width and height)
const getSpecialDimensions = () => {
  // Random base size
  const baseSize = Math.floor(Math.random() * (300 - 200 + 1)) + 200;
  return { width: baseSize * 2, height: baseSize * 2 };
};

// Function to create a list of image URLs with varying sizes
const generateImages = (count) => {
  return Array.from({ length: count }).map(() => {
    // Randomly decide between normal size or special size
    const isSpecial = Math.random() > 0.7; // 30% chance to be special size
    const { width, height } = isSpecial ? getSpecialDimensions() : getRandomDimensions();
    return `https://via.placeholder.com/${width}x${height}`;
  });
};

const MasoneryLayout = () => {
  const initialImages = generateImages(8);
  const additionalImages = generateImages(4);
  const [images, setImages] = useState(initialImages);

  // Function to load more images
  const loadMoreImages = () => {
    setImages(prevImages => [...prevImages, ...additionalImages]);
  };

  // Define the number of columns based on the screen width using breakpoints
  const breakpointColumnsObj = {
    default: 4,  
    1024: 3,     
    768: 2,      
    500: 1,
  };

  return (
    <div className="w-[98%] h-full mt-2 pb-2">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex w-auto gap-4"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((image, index) => (
          <div
            key={index}
            style={{backgroundColor: getRandomNeonColor()}}
            className="mb-4 rounded-sm shadow-md break-inside-avoid"
          >
            <img
              src={image}
              alt={`Masonry item ${index}`}
              className="w-full h-auto object-cover rounded-lg opacity-0"
            />
          </div>
        ))}
      </Masonry>
      <div className="w-full h-8 flex justify-center mt-4">
        <button 
          className="bg-red-400 px-3 text-black rounded" 
          onClick={loadMoreImages}
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default MasoneryLayout;
