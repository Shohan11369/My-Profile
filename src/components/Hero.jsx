import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  const imgInfo = [
    { img: "/S1.jpg" },
    { img: "/me1.jpg" },
    { img: "/me2.jpg" },
    { img: "/me3.jpg" },
    { img: "/Me.jpg" },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto change every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === imgInfo.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const { img } = imgInfo[currentIndex];

  return (
    <section
      id="home"
      className="relative bg-[url(/bg4.jpg)] bg-cover bg-center"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 -z-10"></div>

      <div className="md:flex justify-around items-center gap-6 md:px-10 mx-auto w-[95%] md:w-[90%] py-16">
        {/* Text */}
        <div className="md:w-1/2 px-2 text-center md:text-left">
          <h1 className="text-white font-semibold text-xl md:text-3xl mb-2">
            Hello
          </h1>
          <div className="font-extrabold text-3xl md:text-6xl text-white mb-4">
            <TypeAnimation
              sequence={[
                "I'm Shohan Sarker",
                2000,
                "Full-Stack Developer (in progress)",
                2000,
              ]}
              speed={40}
              repeat={Infinity}
            />
          </div>
          <p className="py-2 text-base md:text-2xl text-white">
            Front-End • HTML • Tailwind • React • MUI
          </p>
          <p className="text-sm md:text-lg text-gray-300">
            I design and build modern, responsive, and user-friendly websites.
          </p>
        </div>

        {/* Auto Image Slider */}
        <div className="md:w-1/2 flex justify-center items-center py-10">
          <img
            key={currentIndex} // Ensures smooth transition on index change
            src={img}
            alt="profile slide"
            className="mx-auto w-[220px] h-[220px] md:w-[390px] md:h-[390px] object-cover rounded-full shadow-lg shadow-blue-400/60 border-4 border-blue-300 transition-transform duration-700 ease-in-out hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
