import React, { useState, useEffect } from "react";

function ImageCarousel() {
  const images = [
    "https://www.google.com/imgres?q=github%20tiny%20images%20for%20icons&imgurl=https%3A%2F%2Fcdn-icons-png.flaticon.com%2F512%2F25%2F25231.png&imgrefurl=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fgithub-logo_25231&docid=kHlC0fHCgyWhTM&tbnid=Lp2OqU7fPdjSMM&vet=12ahUKEwib_t_0tu6MAxUOkK8BHYYzAlcQM3oECGcQAA..i&w=512&h=512&hcb=2&ved=2ahUKEwib_t_0tu6MAxUOkK8BHYYzAlcQM3oECGcQAA",
    "https://www.google.com/imgres?q=tiny%20images%20for%20icons&imgurl=https%3A%2F%2Fcdn0.iconfinder.com%2Fdata%2Ficons%2Ftiny-icons-1%2F100%2Ftiny-17-512.png&imgrefurl=https%3A%2F%2Fwww.iconfinder.com%2Ficons%2F1498850%2Fbulb_idea_light_shining_small_tiny_icon&docid=_Ravurtc9EUctM&tbnid=Ts_QniAbo3ccPM&vet=12ahUKEwi5ka7Ttu6MAxUslK8BHQkNBjkQM3oECDAQAA..i&w=512&h=512&hcb=2&ved=2ahUKEwi5ka7Ttu6MAxUslK8BHQkNBjkQM3oECDAQAA",
    "https://www.google.com/imgres?q=tiny%20images%20for%20icons&imgurl=https%3A%2F%2Fcdn-icons-png.freepik.com%2F256%2F13956%2F13956853.png%3Fsemt%3Dais_hybrid&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Ficons%2Fsmall&docid=UdHQb9OG69245M&tbnid=6RS0G-7OW8TpBM&vet=12ahUKEwi5ka7Ttu6MAxUslK8BHQkNBjkQM3oECFgQAA..i&w=256&h=256&hcb=2&ved=2ahUKEwi5ka7Ttu6MAxUslK8BHQkNBjkQM3oECFgQAA",
  ]; // Replace with your image URLs or paths

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds (adjust as needed)

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images]);

  return (
    <div>
      <img src={images[currentImageIndex]} alt="Changing image" />
    </div>
  );
}

export default ImageCarousel;
