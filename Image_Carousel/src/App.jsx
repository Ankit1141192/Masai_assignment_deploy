import React, { useState } from 'react';

const App = () => {
  const Images = [
    "https://cdn.pixabay.com/photo/2018/10/25/17/19/bird-3772889_1280.jpg",
    "https://cdn.pixabay.com/photo/2022/07/09/18/14/forest-7311484_1280.jpg",
    "https://cdn.pixabay.com/photo/2019/01/05/10/01/knowledge-3914811_1280.jpg",
    "https://cdn.pixabay.com/photo/2022/01/29/13/08/programming-6977450_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/10/05/07/54/binary-3725324_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/12/28/03/39/field-9295186_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/11/17/04/52/chilli-9202873_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/05/03/11/20/bird-7967356_1280.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(null);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < Images.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Albums store image and open image</h1>
      <div className="flex flex-wrap gap-4">
        {Images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt=""
            className="w-32 h-32 object-cover cursor-pointer rounded shadow"
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>

      {currentIndex !== null && (
        <div className="mt-6 flex flex-col items-center gap-4">
          <img
            src={Images[currentIndex]}
            alt="Selected"
            className="w-[500px] h-[400px] object-contain rounded shadow-lg"
          />
          <div className="flex gap-4">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`px-4 py-2 rounded shadow text-white ${
                currentIndex === 0 ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              Prev
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex === Images.length - 1}
              className={`px-4 py-2 rounded shadow text-white ${
                currentIndex === Images.length - 1
                  ? "bg-gray-400"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
