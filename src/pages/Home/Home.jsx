import React from "react";
import HeroImg from "../../assets/img/myimg2.jpg";
import { IoMdArrowDropright } from "react-icons/io";
import { Link } from "react-scroll";
import {ReactTyped} from "react-typed";


const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b  from-black to-gray-700"
    >
      <div className="max-w-screen-lg mx-auto  flex  items-center justify-center h-full px-4 md:flex-row ">
        <div className="flex flex-col justify-center w-2/3 h-full">
         <div>
          <h2 className="text-3xl sm:text-5xl  md:text-7xl text-white font-bold ">
              I am {" "}

            <ReactTyped  strings={["Dipesh Khaiju"," a Full Stack Developer","a Learner"]}
             typeSpeed={150}
             loop
             backspeed={20}
             cursorChar="?"
             showCursor={true}
             />
          </h2>
          </div>
          <p className="text-gray-500 py-4 text-[15px] sm:text-2xl  max-w-md">
            {" "}
            A student trying to get into the web development industry and leave
            some imprints. <br/>
            Hardworking,Motivated and Focused.
          </p>
          <div>
            <Link to='portfolio' smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-xl bg-gradient-to-r from-cyan-500 to to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                {" "}
                <IoMdArrowDropright size={25} />{" "}
              </span>
            </Link>
          </div>
        </div>
        <div className="sm:mb-12 sm:w-1/2">
          <img
            className="rounded-2xl mx-auto w-3/4 sm:w-full"
            src={HeroImg}
            alt="My picccc"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
