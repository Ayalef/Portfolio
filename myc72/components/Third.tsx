import React from 'react';
import { motion } from "framer-motion";



type Props = {
    directionLeft?: boolean;
};

function Third({ directionLeft }: Props) {
  return (
    <div className='group relative flex curso-pointer' >
      <motion.img
       initial={{
        x: directionLeft ? -200 : 200,
        opacity:0,
       }}
       transition={{duration: 1}}
       whileInView={{ opacity:1, x: 0 }}
      
       src="https://img2.freepng.es/20180807/yyg/kisspng-logo-brand-product-design-font-hikmet-y%C4%B1ld%C4%B1z-hikmet-y%C4%B1ld%C4%B1z-part-3-5b691de7b8c6c5.8057194815336155917569.jpg"
       alt=""
       className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-20
       md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300
       ease-in-out'
      />
       <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300
       ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32
       rounded-full z-0' >
        <div className='flex items-center justify-center h-full'> 
            <p className='text-3xl font-bold text-black opacity-100' > 50% </p>
        </div>
       </div>

    </div>
  )
}

export default Third;