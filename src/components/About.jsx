import React from "react";

function About() {
  return (
    <section id="about" className=" bg-[url(BG.jpg)] bg-cover no-repeat ">
      <div className="max-w-5xl   mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-8">About Me</h2>
        <p className="text-center text-lg text-white leading-relaxed">
          I'm currently learning <strong>Full Stack Development</strong>. I've
          completed <strong>Frontend</strong> (HTML, CSS, JavaScript, React) and
          now exploring <strong>Backend</strong> (Node.js, Express, Databases).
          Also, I have strong knowledge in{" "}
          <strong>C++, C#, and Visual Programming</strong>.
        </p>
      </div>
    </section>
  );
}

export default About;
