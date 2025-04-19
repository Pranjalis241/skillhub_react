import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Gallery.css"
const images = [
  { src: "images/aig8.jpg", alt: "AI Image 7" },
  { src: "images/aig.avif", alt: "AI Image 1" },
  { src: "images/ai.webp", alt: "AI Image 2" },
  { src: "images/aig9.png", alt: "AI Image 7" },
  { src: "images/aig7.jpeg", alt: "AI Image 7" },
  { src: "images/aig10.jpg", alt: "AI Image 7" },
  { src: "images/aig11.webp", alt: "AI Image 7" },
  { src: "images/aig2.webp", alt: "AI Image 3" },
  { src: "images/aig3.webp", alt: "AI Image 4" },
  { src: "images/aig4.png", alt: "AI Image 5" },
  { src: "images/aig5.jpg", alt: "AI Image 6" },
  { src: "images/aig6.jpeg", alt: "AI Image 7" }, 

];


export default function Gallery() {
    const [activeIndex, setActiveIndex] = useState(0);
  
    return (
      <div className="gallery-container">
        <h2 className="gallery-title"> Tech Gallery </h2>
  
        {/* Main Image Carousel */}
        <div id="galleryCarousel" className="carousel slide d-flex justify-content-center">
          <div className="carousel-inner1" style={{ maxWidth: "600px" }}>
            {images.map((image, index) => (
              <div key={index} className={`carousel-item ${index === activeIndex ? "active" : ""}`}>
                <img src={image.src} className="d-block w-100 rounded shadow-lg" style={{ height: "350px", objectFit: "cover" }} alt={image.alt} />
              </div>
            ))}
          </div>
  
          {/* Controls */}
          <button className="carousel-control-prev" type="button" onClick={() => setActiveIndex((activeIndex - 1 + images.length) % images.length)}>
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button className="carousel-control-next" type="button" onClick={() => setActiveIndex((activeIndex + 1) % images.length)}>
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
  
        {/* Thumbnail Row */}
        <div className="row mt-3 justify-content-center">
          {images.map((image, index) => (
            <div className="col-2 col-md-1 px-1" key={index}>
              <img
                src={image.src}
                className={`thumbnail ${index === activeIndex ? "active-thumbnail" : ""}`}
                onClick={() => setActiveIndex(index)}
                alt={image.alt}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }