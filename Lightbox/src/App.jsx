import React, { useState } from "react";

const images = [
  { id: 1, src: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=600&auto=format&fit=crop&q=80", alt: "City Skyline" },
  { id: 2, src: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=600&auto=format&fit=crop&q=80", alt: "Coffee and Laptop" },
  { id: 3, src: "https://images.unsplash.com/photo-1508923567004-3a6b8004f3d3?w=600&auto=format&fit=crop&q=80", alt: "Delicious Burger" },
  { id: 4, src: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=600&auto=format&fit=crop&q=80", alt: "Modern Architecture" },
  { id: 5, src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=80", alt: "Technology Chips" },
  { id: 6, src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&auto=format&fit=crop&q=80", alt: "Coding on Laptop" },
  { id: 7, src: "https://images.unsplash.com/photo-1485217988980-11786ced9454?w=600&auto=format&fit=crop&q=80", alt: "Books on Shelf" },
  { id: 8, src: "https://images.unsplash.com/photo-1473181488821-2d23949a045a?w=600&auto=format&fit=crop&q=80", alt: "Travel Map" },
  { id: 9, src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop&q=80", alt: "Smiling Dog" },
  { id: 10, src: "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=600&auto=format&fit=crop&q=80", alt: "Hot Air Balloons" },
  { id: 11, src: "https://images.unsplash.com/photo-1481277542470-605612bd2d61?w=600&auto=format&fit=crop&q=80", alt: "Musical Guitar" },
  { id: 12, src: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?w=600&auto=format&fit=crop&q=80", alt: "Pizza on Table" },
  { id: 13, src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&auto=format&fit=crop&q=80", alt: "Abstract Neon Lights" },
  { id: 14, src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=80", alt: "Man Portrait" },
  { id: 15, src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=80", alt: "Workspace Desk" },
  { id: 16, src: "https://images.unsplash.com/photo-1475724017904-b712052c192a?w=600&auto=format&fit=crop&q=80", alt: "Car on Road" },
  { id: 17, src: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=600&auto=format&fit=crop&q=80", alt: "Colorful Building" },
  { id: 18, src: "https://images.unsplash.com/photo-1514516870926-20598993c8da?w=600&auto=format&fit=crop&q=80", alt: "Healthy Salad" },
  { id: 19, src: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=600&auto=format&fit=crop&q=80", alt: "Starry Night Sky" },
  { id: 20, src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=80", alt: "Team Collaboration" },
];


function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  return (
    <>
      <style>{`
        .gallery-container {
          padding: 20px;
        }
        .grid-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          gap: 15px;
        }
        .grid-image {
          width: 100%;
          height: 150px;
          object-fit: cover;
          cursor: pointer;
          border-radius: 8px;
          transition: transform 0.3s;
        }
        .grid-image:hover {
          transform: scale(1.05);
        }
        /* Modal */
        .modal {
          position: fixed;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: rgba(0,0,0,0.7); /* dark background */
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 100;
        }
        .modal-content {
          display: flex;
          justify-content: center;
          align-items: center;
          max-width: 90%;
          max-height: 90%;
        }
        .main-image {
          max-width: 70vw;
          max-height: 70vh;
          border-radius: 12px;
          cursor: pointer;
          box-shadow: 0 0 30px 10px rgba(0, 123, 255, 0.8); /* BLUE GLOW */
          transition: transform 0.3s ease;
        }
        .main-image:hover {
          transform: scale(1.02);
        }
      `}</style>

      {/* Image Grid */}
      <div className="gallery-container">
        <div className="grid-container">
          {images.map((img) => (
            <img
              key={img.id}
              src={img.src}
              alt={img.alt}
              className="grid-image"
              onClick={() => openModal(img)}
            />
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="main-image"
                onClick={closeModal}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;