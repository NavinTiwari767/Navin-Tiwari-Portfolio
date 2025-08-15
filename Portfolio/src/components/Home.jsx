import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import image from "../../public/mypic.png";
import { SiExpress } from "react-icons/si";

const Home = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isDark, setIsDark] = useState(false);

  // ✅ Detect global dark mode
  useEffect(() => {
    const checkDark = () =>
      setIsDark(document.documentElement.classList.contains("dark"));

    checkDark();
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="max-w-screen-2xl container w-full mx-auto px-6 md:px-20 flex flex-col md:flex-row my-8 items-center transition-colors duration-300">
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full order-2 md:order-1 md:w-1/2 mt-8 md:mt-16"
      >
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-blue-500 dark:text-blue-400 text-4xl md:text-6xl font-extrabold transition-all duration-300">
            Welcome To My Feed
          </h1>

          <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 dark:text-gray-100">
            Hello, I'm a{" "}
            <span className="text-green-500 dark:text-green-300">
              <Typewriter
                options={{
                  strings: ["Developer", "Programmer", "Coder", "Designer"],
                  autoStart: true,
                  loop: true,
                  backSpeed: 50,
                  typeSpeed: 100,
                }}
              />
            </span>
          </h2>

          <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300 max-w-lg mx-auto md:mx-0">
            Passionate about coding and solving complex problems. Let's build
            something amazing together! 🚀
          </p>

          <div className="flex flex-col md:flex-row justify-between items-center mt-12 gap-y-8 md:gap-x-12">
            {/* Available on */}
            <div>
              <h1 className="text-xl font-semibold text-black dark:text-white">
                Available on
              </h1>
              <ul className="flex gap-6 mt-4 justify-center md:justify-start">
                {[
                  {
                    link: "https://github.com/NavinTiwari767",
                    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
                    name: "GitHub",
                  },
                  {
                    link: "https://www.linkedin.com/in/navin-tiwari-b19371290/",
                    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
                    name: "LinkedIn",
                  },
                  {
                    link: "https://www.youtube.com/@CollegeCampus1",
                    img: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
                    name: "YouTube",
                  },
                  {
                    link: "https://facebook.com",
                    img: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
                    name: "Facebook",
                  },
                ].map((platform, index) => (
                  <li
                    key={index}
                    className="hover:scale-110 transition-transform duration-200"
                  >
                    <a href={platform.link} target="_blank" rel="noreferrer">
                      <img
                        src={platform.img}
                        alt={platform.name}
                        className="w-10 h-10 dark:invert"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Currently working on */}
            <div>
              <h1 className="text-xl font-semibold text-black dark:text-white">
                Currently working on
              </h1>
              <ul className="flex gap-6 mt-4 justify-center md:justify-start items-center">
                {[
                  {
                    img: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
                    name: "MongoDB",
                  },
                  {
                    img: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
                    name: "React",
                  },
                  {
                    img: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
                    name: "Node.js",
                  },
                ].map((tech, index) => (
                  <li
                    key={index}
                    className="hover:scale-110 transition-transform duration-200"
                  >
                    <img
                      src={tech.img}
                      alt={tech.name}
                      className="w-10 h-10 dark:invert"
                    />
                  </li>
                ))}
                <li className="hover:scale-110 transition-transform duration-200">
                  <SiExpress className="text-3xl text-gray-800 dark:text-gray-300" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="order-1 w-full md:w-1/2 flex justify-center mb-8 md:mb-0"
      >
        <div
          onMouseMove={handleMouseMove}
          className="relative w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 border-gray-500 dark:border-gray-300 shadow-xl transition-transform duration-300 hover:scale-110"
        >
          {/* Cursor Glow */}
          <div
            className="pointer-events-none absolute -inset-px rounded-full transition-all duration-300"
            style={{
              background: `radial-gradient(200px circle at ${cursorPos.x}px ${cursorPos.y}px, ${
                isDark
                  ? "rgba(59,130,246,0.25)" // Blue for dark mode
                  : "rgba(34,197,94,0.25)" // Green for light mode
              }, transparent 80%)`,
            }}
          />
          <img
            src={image}
            className="w-full h-full object-cover relative z-10"
            alt="banner"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
