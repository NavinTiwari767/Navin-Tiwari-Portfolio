import React from "react";
import { motion } from "framer-motion";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import java from "../../public/java.png";
import javascript from "../../public/javascript.png";
import mongoDB from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/node.png";

function Experiance() {
  const cardItem = [
    { id: 1, logo: html, name: "HTML" },
    { id: 2, logo: css, name: "CSS" },
    { id: 3, logo: java, name: "Java" },
    { id: 4, logo: javascript, name: "JavaScript" },
    { id: 5, logo: mongoDB, name: "MongoDB" },
    { id: 6, logo: express, name: "Express" },
    { id: 7, logo: reactjs, name: "ReactJS" },
    { id: 8, logo: nodejs, name: "NodeJS" },
  ];

  return (
    <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <h1 className="text-3xl font-bold mb-5 text-green-700">Tech Expertise</h1>
      <p>I've more than 4 years of experience in the following technologies:</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-7 my-3">
        {cardItem.map(({ id, logo, name }) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.15, rotate: 2 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center border-[2px] rounded-full w-[150px] h-[150px] md:w-[200px] md:h-[200px] shadow-md p-3 cursor-pointer bg-white hover:shadow-2xl"
          >
            <motion.img
              src={logo}
              className="w-[100px] md:w-[150px] rounded-full"
              alt={name}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            />
            <div className="mt-2 font-semibold">{name}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Experiance;
