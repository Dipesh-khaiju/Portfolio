import React from 'react';
import { FaGithub,FaLinkedinIn } from 'react-icons/fa';
import {HiOutlineMail} from "react-icons/hi";
import {BsFillPersonLinesFill} from "react-icons/bs"

const SocialLinks = () => {
const links=[
    {
        id:1,
        child:(
            <>
             LinkedIn <FaLinkedinIn size={30} />
            </>
        ),
        href:"https://www.linkedin.com/in/dipesh-khaiju-385b63243/",
        style:"rounded-tr-md"
    },
    {
        id:2,
        child:(
            <>
             GitHub <FaGithub size={30} />
            </>
        ),
        href:"https://github.com/Dipesh-khaiju",
       
    },
    {
        id:3,
        child:(
            <>
              Mail <HiOutlineMail size={30} />
            </>
        ),
        href:"https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGLrTDrZnJJLWGbZpGVwCMvllZVCCjTgNvKHmtZjHTjstFTJbqfVfnfFmRCNkXDzNhhGMhQ",
        
    },
    {
        id:4,
        child:(
            <>
             Resume <BsFillPersonLinesFill size={30} />
            </>
        ),
        href:"../../public/Resume-Dipesh-Khaiju.pdf",
        style:"rounded-br-md",
        download:true
    },
]


  return (
    <div className='sm:block  flex-col fixed top-[35%] left-0'>
        <ul>

        {
            links.map(({id,href,child,style,download})=>(
                <li key={id} 
                className={"flex justify-between itens-center w-40 h-14 px-4 bg-gray-500 ml-[-140px] sm:ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px]"+" "+style}>
                <a href={href} download={download} target="_blank" className='flex justify-between items-center w-full text-white'>
                  {child}
                </a>
            </li>
            ))}   
        </ul>
    </div>
  )
            }

export default SocialLinks;