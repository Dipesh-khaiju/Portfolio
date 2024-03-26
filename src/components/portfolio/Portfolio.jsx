import React from "react";
import khaijushop from "../../assets/img/khaijushop.png";
import cms from "../../assets/img/cms.png";
import weather from "../../assets/img/weather.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: khaijushop,
      link1: "https://khaijushop.netlify.app/",
      link2: "https://github.com/Dipesh-khaiju/ecomm_khaijushop"
    },
    {
      id: 2,
      src: cms,
      link1: "https://merocms.onrender.com/",
      link2: "https://github.com/Dipesh-khaiju/CMS"
    },
    {
      id: 3,
      src: weather,
      link1: "https://weatherappdipesh.onrender.com/",
      link2: "https://github.com/Dipesh-khaiju/todolist_mern"
    },
  ];

  function navigateDemo(link1) {
    window.location.href = link1;
  }

  function navigateCode(link2) {
    window.location.href = link2;
  }

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-kg p-4 mx-auto flex flex-col justify-center w-fullh-full">
        <div>
          <p className="text-4xl font-bold  inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my Projects:</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link1, link2 }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className=" rounded-md duration-300 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  onClick={() => navigateDemo(link1)}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </button>
                <button
                  onClick={() => navigateCode(link2)}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
