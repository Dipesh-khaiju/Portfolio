import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from "react-scroll";

const Navbar = () => {

  const [nav,setNav] = useState(false);
  // json for the navbar section
  const links = [
    {
      id: 1,
      name: "Home",
      target:"home"
    },
    {
      id: 2,
      name: "About",
      target:"About"
    },
    {
      id: 3,
      name: "Portfolio",
      target:"portfolio"
    },
    
    {
      id: 5,
      name: "Experience",
      target:"experience"
    },
    {
      id: 4,
      name: "Contact",
      target:"contact"
    },
  ];
  return (
    <>
      <div className="flex justify-between items-center w-full h-20 text-white fixed px-4  font-serif bg-black">
        <h1 className="text-4xl">𝓓𝓲𝓹𝓮𝓼𝓱 𝓴𝓱𝓪𝓲𝓳𝓾</h1>

        <ul className=" hidden  sm:flex">
          {links.map(({ id, name,target}) => (
            <li
              key={id}
              className="px-4 cursor-pointer font-medium text-gray-400 hover:scale-105 duration-200"
            >
             <Link to={target} smooth duration={500} > {name}</Link>
            </li>
          ))}
        </ul>

        <div onClick={()=>setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 sm:hidden">
           {
            nav ?
            ( <FaTimes size={30} />):(<FaBars size={30}/>)
           }
        </div>
        {nav?  <ul className="flex text-gray-500 flex-col justify-center items-center absolute w-full h-screen top-0 left-0 bg-gradient-to-b from-black to-gray-500"> 
         {links.map(({ id, name,target}) => (
          <li key={id} className="px-4 cursor-pointer capitalize py-6 text-3xl"><Link to={target}onClick={()=>setNav(!nav)} smooth duration={500}> {name}</Link></li>
          ))}

        </ul> : ""}
      

      </div>
    </>
  );
};

export default Navbar;
