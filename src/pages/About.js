import React from "react";

const About = () => {
  return (
    <div className="px-44 py-20">
      <div className="flex items-end pb-6">
        <h2 className="text-2xl font-bold text-red-300 font-display pr-4">
          01.
        </h2>
        <h2 className="text-4xl font-bold text-gray-100  font-display">
          About me
        </h2>
      </div>
      <div className="flex flex-row py-6">
        <div className="about-text w-1/2 mr-5 text-gray-400 font-body text-sm text-justify">
          <p>
            I am a multi-disciplinary designer with a background in
            Architecture. I graduated with my Master’s Degree in Architecture in
            2016 and have gained 6 years of experience working in the field.
          </p>
          <p className="py-4 mb-4">
            Today, I am eager to transition into web development and focus not
            only web design but also building impactful and meaningful digital
            experiences for users. I have a passion for problem solving and
            turning complex problems into intuitive and straightforward
            solutions. While I have experience in design, I am a pragmatist and
            appreciate that UX/UI design and development are reliant on each
            other. I strive to grow in both areas in hopes of becoming a well
            rounded front end developer.
          </p>
          <p className="text-gray-300">
            Technologies I have worked with recently:
          </p>
          <ul className="flex flex-row mt-3 text-gray-300">
            <div className="flex flex-col mr-12">
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>HTML & CSS</li>
              <li>Tailwind CSS</li>
            </div>
            <div className="flex flex-col">
              <li>GSAP</li>
              <li>Figma</li>
              <li>Adobe Illustrator</li>
              <li>Adobe InDesign</li>
            </div>
          </ul>
        </div>
        <div className="about-photo flex justify-center self-center w-1/2 bg-gray-700 text-gray-200 ml-5">
          Santhe's photo
        </div>
      </div>
    </div>
  );
};

export default About;
