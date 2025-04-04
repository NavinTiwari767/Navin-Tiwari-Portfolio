import React, { useState } from 'react';

const Project = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [staticSlide, setStaticSlide] = useState(0);

  const slides1 = [
    { image: "/p1.jpg", title: "Book Store! 📚📖", description: "This is the first slide content." },
    { image: "/p2.png", title: "Book Store! 📚📖", description: "This is the second slide content." },
    { image: "/p3.png", title: "Book Store! 📚📖", description: "This is the third slide content." }
  ];

  const slides2 = [
    { image: "/R1.png", title: "Restaurant Hub 🍕🍔", description: "This is the first slide of second card." },
    { image: "/R2.png", title: "Restaurant Hub 🍕🍔", description: "This is the second slide of second card." },
    { image: "/R3.png", title: "Restaurant Hub 🍕🍔", description: "This is the fourth slide of second card." },
    { image: "/R4.png", title: "Restaurant Hub 🍕🍔", description: "This is the fifth slide of second card." },
    { image: "/R5.png", title: "Restaurant Hub 🍕🍔", description: "This is the sixth slide of second card." }
  ];

  const nextSlide1 = () => setCurrentSlide((prev) => (prev + 1) % slides1.length);
  const prevSlide1 = () => setCurrentSlide((prev) => (prev - 1 + slides1.length) % slides1.length);

  const nextSlide2 = () => setStaticSlide((prev) => (prev + 1) % slides2.length);
  const prevSlide2 = () => setStaticSlide((prev) => (prev - 1 + slides2.length) % slides2.length);

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-12">
      <div className="mb-8">
        <h1 className="text-4xl font-extrabold mb-5 text-green-700">🚀 Projects</h1>
        <p className="text-gray-700 text-lg">I have more than 2 years of experience in the technologies below.</p>
      </div>

      <div className="flex flex-col md:flex-row justify-start gap-12">
        {/* Book Store Card */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden w-96 transition-transform transform hover:scale-105">
          <button className="absolute left-2 top-1/2 z-10 bg-gray-200 p-2 rounded-full" onClick={prevSlide1}>❮</button>
          <button className="absolute right-2 top-1/2 z-10 bg-gray-200 p-2 rounded-full" onClick={nextSlide1}>❯</button>

          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {slides1.map((_, index) => (
              <button key={index} className={`w-2 h-2 rounded-full ${index === currentSlide ? 'bg-green-600' : 'bg-gray-300'}`} onClick={() => setCurrentSlide(index)} />
            ))}
          </div>

          <figure>
            <img src={slides1[currentSlide].image} alt={slides1[currentSlide].title} className="w-full h-48 object-cover" />
          </figure>
          <div className="p-6">
            <h2 className="text-xl font-bold">{slides1[currentSlide].title}</h2>
            <p className="text-gray-600">{slides1[currentSlide].description}</p>
          </div>
        </div>

        {/* Restaurant Hub Card */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden w-96 transition-transform transform hover:scale-105">
          <button className="absolute left-2 top-1/2 z-10 bg-gray-200 p-2 rounded-full" onClick={prevSlide2}>❮</button>
          <button className="absolute right-2 top-1/2 z-10 bg-gray-200 p-2 rounded-full" onClick={nextSlide2}>❯</button>

          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {slides2.map((_, index) => (
              <button key={index} className={`w-2 h-2 rounded-full ${index === staticSlide ? 'bg-green-600' : 'bg-gray-300'}`} onClick={() => setStaticSlide(index)} />
            ))}
          </div>

          <figure>
            <img src={slides2[staticSlide].image} alt={slides2[staticSlide].title} className="w-full h-48 object-cover" />
          </figure>
          <div className="p-6">
            <h2 className="text-xl font-bold">{slides2[staticSlide].title}</h2>
            <p className="text-gray-600">{slides2[staticSlide].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
