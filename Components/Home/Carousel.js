import React, { useState, useEffect } from "react";

export default function Carousel() {
  // Declare a state variable called "currentIndex" and set it to 0
  const [currentIndex, setCurrentIndex] = useState(0);

  // Create an array of images that you want to display in the carousel
  const images = [
    "https://www.netmeds.com/images/cms/aw_rbslider/slides/1666362521_Home_Bannernms20.jpg",
    "https://www.netmeds.com/images/cms/aw_rbslider/slides/1654018133_Web_Home_Kareena.jpg",
    "https://www.netmeds.com/images/cms/aw_rbslider/slides/1671539723_Web_Home_Banners.jpg",
  ];

  // Declare a function that will handle moving to the next image in the carousel
  const nextImage = () => {
    // If the current index is the last image, set the current index to 0
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      // Otherwise, increment the current index by 1
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Declare a function that will handle moving to the previous image in the carousel
  const prevImage = () => {
    // If the current index is the first image, set the current index to the last image
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      // Otherwise, decrement the current index by 1
      setCurrentIndex(currentIndex - 1);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      if(currentIndex < images.length - 1) 
      {
        setCurrentIndex(currentIndex + 1);
      }
      else{
        setCurrentIndex(0);
      }
    }, 2000);
  }, [currentIndex]);

  return (
    <div className="w-100 py-4">
      <img
        src={images[currentIndex]}
        alt="Current image"
        className=" h-1/4 w-full object-cover"
      />
      {/* <button
        onClick={prevImage}
        className="relative left-0 top-30 m-4 p-4 rounded-full bg-white hover:bg-gray-200"
      >
        Pre
      </button>
      <button
        onClick={nextImage}
        className="absolute right-0 top-30 m-4 p-4 rounded-full bg-white hover:bg-gray-200"
      >
        Next
      </button> */}
    </div>
  );
}
