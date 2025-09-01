import React from "react";
import Marquee from "react-fast-marquee";

export default function LogoCarousel() {
  const logos = [
    { img: "/logo (1).jpg" },
    { img: "/logo .png" },
    { img: "/logo (5).png" },
    { img: "/logo (2).png" },
    { img: "/logo (7).png" },
    { img: "/logo (3).png" },
    { img: "/logo (4).png" },
    { img: "/logo (6).png" },
    { img: "/logo (7).png" },
  ];

  return (
    <section className="bg-[url('/bg7.jpg')] bg-cover">
      <div className="bg-gray-600/40 py-6 w-[92%] md:w-[80%] mx-auto rounded-xl">
        <div className="max-w-6xl mx-auto mt-2">
          <Marquee
            direction="right"
            speed={30}
            gradient={false}
            pauseOnHover
            loop={0}
          >
            {logos.map((item, i) => (
              <div
                key={i}
                className="md:w-40 w-24 h-12 md:h-20 mx-4 flex items-center justify-center shadow"
              >
                <img
                  src={item.img}
                  alt={`logo-${i}`}
                  className="h-full rounded-lg object-contain"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
