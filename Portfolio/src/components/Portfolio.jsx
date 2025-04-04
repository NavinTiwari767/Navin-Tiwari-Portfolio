import React from "react";
import java from "../../public/java.png";
import mongoDB from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/node.png";

function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: mongoDB,
      name: "MongoDB",
      desc: "MongoDB is a NoSQL database known for its flexibility and scalability."
    },
    {
      id: 2,
      logo: express,
      name: "Express",
      desc: "Express is a minimal and flexible Node.js web application framework."
    },
    {
      id: 3,
      logo: reactjs,
      name: "ReactJS",
      desc: "ReactJS is a powerful JavaScript library for building dynamic UIs."
    },
    {
      id: 4,
      logo: nodejs,
      name: "NodeJS",
      desc: "NodeJS enables server-side scripting using JavaScript for scalable apps."
    },
    {
      id: 5,
      logo: java,
      name: "Java",
      desc: "Java is a versatile, object-oriented programming language used worldwide."
    },
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <h1 className="text-4xl font-bold mb-5 text-green-700">Portfolio</h1>
      <span className="underline font-semibold text-lg text-gray-700">Featured Projects</span>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 my-10">
        {cardItem.map(({ id, logo, name, desc }) => (
          <div
            key={id}
            className="border-[2px] rounded-xl shadow-lg p-5 cursor-pointer hover:scale-105 duration-300 bg-white"
          >
            <div className="flex justify-center">
              <img
                src={logo}
                className="w-[120px] h-[120px] rounded-full border-[2px] p-2"
                alt={name}
              />
            </div>
            <div className="text-center mt-4">
              <h2 className="font-bold text-2xl text-gray-800">{name}</h2>
              <p className="text-gray-600 mt-2">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PortFolio;
