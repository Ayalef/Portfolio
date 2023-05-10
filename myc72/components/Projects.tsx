import React from 'react'
import Image from 'next/image';
import webImg from "../public/web.png";
import webbImg from "../public/webb.png";

type Props = {}
function Projects({}: Props) {
  const projects = [
    {
      id: 1,
      title: "Web 3 Lottery Front page",
      image: webImg,
    },
    {
      id: 2,
      title: "Web 3 Lottery Main page",
      image: webbImg,
    },
  ];
     
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0' >
        <h3 className='absolute top-12 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Projects
        </h3>
        <h4 className='absolute top-24 font-mono ' > Use Arrow keys to change the image</h4>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20' >
          {projects.map((project) => ( 
             <div key={project.id} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen ' > 
              <Image className=' ' src={project.image} alt="/" />
              
              <div>
                <h4 className='font-mono   text-2xl ' >{project.title}</h4> 
              </div>
             </div>
          ))}
        </div>
        <div className='w-full absolute top-[30%] bg-[#CB8AFF]/10 left-0 h-[500px] -skew-y-12 ' />
        <h4>
            
            
        </h4>
    </div>
  )
}

export default Projects
