import React, { useState } from "react";

const ImageSlider = () => {
  const images = [
    "https://i.pinimg.com/236x/b6/21/07/b62107d70659823c6f409480f7435d14--watercolor-food-watercolor-print.jpg",
    "https://i.pinimg.com/236x/8a/61/c1/8a61c1ca0d1a20db922aa5e3a8493d0e--watercolour-flowers-watercolor-ideas.jpg",
    "https://i.pinimg.com/236x/86/d6/46/86d646ce2f92efd7890843ef5af9e700.jpg",
    "https://i.pinimg.com/236x/f6/4d/d7/f64dd7eb8df298195d61569b9634f982--watercolor-sketch-watercolor-kiwi.jpg",
  ];

  const [idx, setIdx] = useState(0);
  const handlePrevious = () => {
    if (idx === 0) {
      setIdx(images.length - 1);
      console.log(setIdx);
    } else {
      setIdx(idx - 1);
    }
  };
  const handleNext = () => {
    setIdx(idx + 1);
  };
  return (
    <div>
      <button onClick={handlePrevious}>previous</button>
      <img
        src={images[idx % images.length]}
        style={{ width: 200, height: 200 }}
        alt="test"
      />
      <button onClick={handleNext}>next</button>
    </div>
  );
};

export default ImageSlider;
