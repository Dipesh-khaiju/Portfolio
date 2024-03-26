import React from "react";
import html from "../../assets/img/html.jpg";
import css from "../../assets/img/css.jpg";
import js from "../../assets/img/JS.jpg";
import github from "../../assets/img/github.jpg";
import reactimg from "../../assets/img/React.png";
import mongo from "../../assets/img/MongoDb.png";
import tailwind from "../../assets/img/tailwind.png";
import node from "../../assets/img/nodejs.png";

const Experience = () => {
  const tech = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500 ",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: js,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
   
    {
      id: 4,
      src: mongo,
      title: "MongoDB",
      style: "shadow-green-500",
    },
    {
        id: 5,
        src: reactimg,
        title: "ReactJs",
        style: "shadow-blue-500",
      },
    {
      id: 6,
      src: node,
      title: "NodeJs",
      style: "shadow-green-500",
    },
    {
      id: 7,
      src: tailwind,
      title: "Tailwind CSS",
      style: "shadow-blue-500",
    },
    {
      id: 8,
      src: github,
      title: "Github",
      style: "shadow-white",
    },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-fullh-screen"
    >
      <div className="max-w-screen-kg mx-auto w-full h-full p-4 flex flex-col  justify-center text-white ">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies i have worked with.</p>
        </div>

        <div
        
          className={`w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 `}
        >
          {tech.map(({ id, src, title, style }) => (
            <div   key={id} className={`shadow-md hover:scale-105 duration-600 py-2 rounded-lg ${style}`}>
              <img alt="" src={src} className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
