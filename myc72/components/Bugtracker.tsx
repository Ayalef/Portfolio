import React from 'react'
import Image from 'next/image';

type Props = {}
function Bugtracker({}: Props) {
  const projects = [
    {
      id: 1,
      title: "Home page ",
      image: "https://i.postimg.cc/HnZ7zX9f/home.png  " ,
    },
    {
      id: 2,
      title: "Project creation",
      image: "https://i.postimg.cc/Y0qWQbY6/pro.png" ,
    },
    {
        id: 3,
        title: "Proyect Details ",
        image: "https://i.postimg.cc/qqc8bnYw/yy.png",
      },
      {
        id: 4,
        title: "Bug Form",
        image: "https://i.postimg.cc/vBvn1pg8/form.png",
      },
      {
        id: 5,
        title: "Todo stored",
        image: "https://i.postimg.cc/d3c2jnWD/todo.png",
      },
  ];
     
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0' >
        

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20' >
          {projects.map((project) => ( 
             <div key={project.id} className='w-screen flex-shrink-0  flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen ' > 
              <Image className='' src={project.image} alt='/' width={600} height={600} />
              
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