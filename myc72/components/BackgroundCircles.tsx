import React from 'react'
import { motion } from 'framer-motion';

type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <motion.div 
   
 className="relative flex justify-center items-center"
    >
     
        <div className='absolute border border-[#B75CFF] rounded-full h-[200px] w-[200px] mt-52 animate-ping ' />
        
        
       
        <div className='rounded-full border border-[#CB8AFF] opacity-10 h-[650px] w-[650px] absolute mt-52 animate-pulse'/>
        <div className='absolute border border-[#B75CFF] rounded-full h-[500px] w-[500px] mt-52 animate-ping ' />
        
        
        
      </motion.div>
  );
}

export default BackgroundCircles