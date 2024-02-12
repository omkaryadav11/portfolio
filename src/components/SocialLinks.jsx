import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
// import { BsFillPersonLinesFill } from "react-icons/bs";
const SocialLinks = () => {
    const links = [
        {
            id: 1,
            child: (
                <> 
                  LinkedIn <FaLinkedin size={25}/>
                 </>
            ),
            href:'https://linkedin.com',
            style: 'rounded-tr-md',
        },
        {
            id: 2,
            child: (
                <> 
                  GithHub <FaGithub size={25}/>
                 </>
            ),
            href:'https://github.com/omkaryadav11',
        },
        {
            id: 3,
            child: (
                <> 
                  Message <HiOutlineMail size={25}/>
                 </>
            ),
            style: 'rounded-br-md',
            href:'mailto:contact.omkar.yadav@gmail.com',
        },
    ];

  return (
    <div className="hidden lg:flex flex-col fixed top-[35%] left-0 ">
       <ul>
        {links.map(({id,child,href,style,download}) => (
            <li key={id} className={"flex justify-between items-center px-4 w-40 h-14 bg-gradient-to-r from-slate-500 via-slate-500 to-gray-300 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300"
        + " " + style}>
               <a href={href} className="flex justify-between items-center w-full text-black font-bold"
               target='_blank'
               rel="noreferrer">
                   {child}
               </a>
           </li>
        ))}

       </ul>
    </div>
  )
}

export default SocialLinks;
