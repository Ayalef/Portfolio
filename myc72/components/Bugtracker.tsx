import React from 'react'
import Image from 'next/image';
import webImg from "../public/web.png";
import webbImg from "../public/webb.png";
import homeimg from "../public/home.png";
import yyimg from "../public/yy.png";
import formImg from "../public/form.png";
import proimg from "../public/Pro.png";
import todoimg from "../public/todo.png";

type Props = {}
function Bugtracker({}: Props) {
  const projects = [
    {
      id: 1,
      title: "Home page ",
      image: homeimg,
    },
    {
      id: 2,
      title: "Project creation",
      image: proimg,
    },
    {
        id: 3,
        title: "Proyect Details ",
        image: yyimg,
      },
      {
        id: 4,
        title: "Bug Form",
        image: formImg,
      },
      {
        id: 5,
        title: "Todo stored",
        image: todoimg,
      },
  ];
     
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0' >
        

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20' >
          {projects.map((project) => ( 
             <div key={project.id} className='w-screen flex-shrink-0  flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen ' > 
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

export default Bugtracker