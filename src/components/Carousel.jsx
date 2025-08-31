import React, { useState } from "react";

const slides = [
  { id: 1, title: "Featured Story 1", bg: "bg-blue-300" },
  { id: 2, title: "Featured Story 2", bg: "bg-pink-300" },
  { id: 3, title: "Featured Story 3", bg: "bg-green-300" },
];

function Carousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((current + 1) % slides.length);
  const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length);

  return (
    <section id="home" className="relative w-full h-96 mt-16 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full flex items-center justify-center transition-all duration-700 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          } ${slide.bg}`}
        >
          <h2 className="text-3xl font-bold text-white">{slide.title}</h2>
        </div>
      ))}

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
      >
        ▶
      </button>
    </section>
  );
}

export default Carousel;
