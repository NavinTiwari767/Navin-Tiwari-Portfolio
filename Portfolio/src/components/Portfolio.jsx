import React from "react";
import { motion } from "framer-motion";

function PortFolio() {
  const projects = [
    {
      id: 1,
      image: "your-image-path-here", // apna image path daalna
      title: "Project 1",
      desc: "Short description about this project."
    },
    {
      id: 2,
      image: "your-image-path-here",
      title: "Project 2",
      desc: "Short description about this project  sflhsifhbskfs dsiufkybb,."
    },
    {
      id: 3,
      image: "your-image-path-here",
      title: "Project 3",
      desc: "Short description about this project."
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hover: { scale: 1.05, boxShadow: "0px 8px 20px rgba(0,0,0,0.3)" }
  };

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <h1 className="text-4xl font-bold mb-5 text-green-700">My Work</h1>
      <span className="underline font-semibold text-lg text-gray-700">
        A collection of projects I've worked on
      </span>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 my-10">
        {projects.map(({ id, image, title, desc }) => (
          <motion.div
            key={id}
            className="border-[2px] rounded-xl shadow-lg overflow-hidden bg-white cursor-pointer flex flex-col"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
          >
            {/* Image */}
            <motion.img
              src={image}
              alt={title}
              className="h-48 w-full object-cover"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.3 }}
            />

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
              <h2 className="font-bold text-xl text-gray-800">{title}</h2>
              <p className="text-gray-600 mt-2 text-sm flex-1">{desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default PortFolio;
