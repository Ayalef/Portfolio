import React from 'react'
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from './BackgroundCircles';
import Image from "next/image";



type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
          " Hey there my Name is Santiago Ayalef ",
          "I am a 22 years old from Argentina",
          "and im really excited to work as a software developer",
        ],
        loop: true,
        delaySpeed:2000,
    });
    

  return (
    <div className=' h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden '>
       <BackgroundCircles />
       <Image className=' rounded-full  ' src={"https://i.postimg.cc/VL19SGrV/z.png"} alt="/" width={150} height={250} />
       <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]' >
       Software Engineer
       </h2>
        <h1 className='text-5xl lg:text-4xl font-mono '>
            <span>{text}</span>
            <Cursor cursorColor='#B75CFF' />
            
        </h1>

    </div>
  )
}