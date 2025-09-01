import React, { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default function Skills() {
  const slider = [
    {
      img: "/Hotel.png",
      heading: "Hotel-Business",
      client: "",
      link: "https://playful-custard-913249.netlify.app/",
    },
    {
      img: "/wiza.png",
      heading: "WiZa",
      client: "",
      link: "https://relaxed-gingersnap-cdce45.netlify.app/",
    },
    {
      img: "/disaster.png",
      heading: "Disaster",
      client: "",
      link: "https://courageous-paletas-686738.netlify.app/",
    },
    {
      img: "/Agri.png",
      heading: "Agrios",
      client: "",
      link: "https://shohan11369.github.io/project-03/",
    },
    // {
    //   img: "/image copy 3.png",
    //   heading: "Natural Wiki",
    //   client: "",
    //   link: "",
    // },
  ];

  const [anim, setAnim] = useState("opacity-100 translate-x-0");
  const [idx, setIdx] = useState(0);

  const prev = () => {
    setAnim("opacity-0 -translate-x-10");
    setTimeout(() => {
      setIdx((p) => (p === 0 ? slider.length - 1 : p - 1));
      setAnim("opacity-100 translate-x-0");
    }, 300);
  };
  const next = () => {
    setAnim("opacity-0 translate-x-10");
    setTimeout(() => {
      setIdx((p) => (p === slider.length - 1 ? 0 : p + 1));
      setAnim("opacity-100 translate-x-0");
    }, 300);
  };

  const { img, heading, client, link } = slider[idx];

  return (
    <section
      id="skills"
      className="bg-[url('/bg7.jpg')] bg-cover bg-center bg-no-repeat w-full min-h-screen m-0 p-0 flex items-center"
    >
      <div className="relative scroll-mt-24 w-[100%] md:w-[80%] mx-auto">
        <div className="md:flex justify-between items-stretch gap-8 relative z-10 ">
          {/* Skills list */}
          <div className="flex flex-col bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] shadow-xl shadow-blue-500/10 rounded-2xl mt-6 !mb-8 md:mb-0 p-8  md:w-1/2 border border-gray-700/50 backdrop-blur-sm text-white ">
            <h2 className="text-center font-bold text-3xl pb-6 tracking-wide mt-20">
              My Skills
            </h2>
            <div className="flex flex-wrap gap-3 justify-center ">
              {[
                "HTML",
                "CSS",
                "Tailwind CSS",
                "JavaScript",
                "React JS",
                "Node.js",
                "Debugging",
                "Express JS",
                "Responsive Design",
              ].map((s) => (
                <button
                  key={s}
                  className="px-4 py-2 bg-white text-black font-medium rounded-full shadow-md hover:bg-gray-400 hover:text-black transition-all duration-300"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Project slider */}
          <div className="flex bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] shadow-xl shadow-indigo-500/10 rounded-2xl justify-center items-center gap-4 p-6 md:w-1/2 border mt-6 mb-6 border-gray-700/50 backdrop-blur-sm text-white">
            <button
              className="p-3 bg-gray-700 hover:bg-gray-600 text-white rounded-xl shadow-md transition"
              onClick={prev}
              aria-label="Prev"
            >
              <ArrowBackIosIcon />
            </button>

            <div
              className={`transition-all duration-500 ease-in-out transform ${anim} text-center  max-w-sm`}
            >
              <h3 className="font-bold text-2xl pb-4">Current Project</h3>
              <img
                className="h-[260px] md:h-[300px] mx-auto object-cover rounded-xl border border-gray-700 shadow-lg hover:scale-105 transition"
                src={img}
                alt={heading}
              />
              <h4 className="font-bold text-2xl mt-3">{heading}</h4>
              <p className="opacity-80">{client}</p>
              <a
                className="inline-block mt-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-700 hover:to-blue-700 transition font-medium shadow-md text-white"
                href={link}
                target="_blank"
                rel="noreferrer"
              >
                Visit
              </a>
            </div>

            <button
              className="p-3 bg-gray-700 hover:bg-gray-600 text-white rounded-xl shadow-md transition"
              onClick={next}
              aria-label="Next"
            >
              <ArrowForwardIosIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
