import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-6 md:px-20 my-20"
    >
      {/* About Me Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center md:text-left"
      >
        <h1 className="text-5xl font-bold mb-8 text-green-700 dark:text-green-400 transition-all">
          About Me
        </h1>
        <p className="text-lg leading-7 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto md:mx-0">
          Hello, I'm <span className="font-semibold">Navin Tiwari</span> — a passionate Web Developer skilled in the MERN Stack and Cloud Computing. Currently diving deep into AWS to build scalable and impactful software solutions.
        </p>
      </motion.div>

      {/* Grid Container for Cards */}
      <div className="grid gap-10 mt-12">
        {[
          {
            title: "Education & Training",
            content: [
              "B.Tech in Computer Science, NIST University, 2026",
              "AWS Cloud Practitioner (Ongoing)",
              "Full-Stack Web Development, [Platform], 2024",
            ],
          },
          {
            title: "Skills & Expertise",
            content: [
              "MERN Stack (MongoDB, Express, React, Node.js)",
              "AWS Cloud (EC2, S3, Lambda, IAM)",
              "Frontend: HTML5, CSS3, Tailwind CSS",
              "Version Control: Git & GitHub",
              "Problem-Solving & Team Collaboration",
            ],
          },
          {
            title: "Professional Experience",
            content: [
              "Freelance Web Developer, Remote — 2023-Present",
              "- Built dynamic websites and web apps for clients",
              "- Integrated cloud services for scalable solutions",
            ],
          },
          {
            title: "Achievements & Awards",
            content: [
              "Cloud Computing Club Member at NIST",
              "Winner, [Coding Competition], 2024",
              "Certified in Responsive Web Design",
            ],
          },
          {
            title: "Mission Statement",
            content: [
              "My mission is to leverage my web development and cloud computing skills to create impactful digital solutions. I believe in continuous learning, innovation, and delivering value that exceeds client expectations.",
            ],
          },
        ].map((section, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white/90 dark:bg-gray-800/70 backdrop-blur-lg rounded-2xl shadow-lg border-l-4 border-green-600 dark:border-green-400 transition-all"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-green-600 dark:text-green-400 mb-4">
              {section.title}
            </h2>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
              {section.content.map((item, i) => (
                <li key={i} className="hover:text-green-600 dark:hover:text-green-400 transition-all">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default About;
