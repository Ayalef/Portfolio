import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from "framer-motion";

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max_w_7x1 mx_auto
    z_20 xl:items-center ' >
        <motion.div 
          initial={{
            x: -500,
            opacity:0,
            scale: 0.5,
          }}
          animate={{
            x:0,
            opacity: 1,
            scale:1,
          }}
          transition={{
            duration:1.5,
          }}
            className='flex flex-row items center' >
            <SocialIcon 
              url="https://www.linkedin.com/in/santiago-ayalef-60a826227/"
              fgColor="gray"
              bgColor="transparent"
              />
            <SocialIcon 
              url="https://github.com/Ayalef" 
              fgColor="gray"
              bgColor="transparent"
              />
            <SocialIcon 
              url="https://stackoverflow.com/users/18993949/ayalef" 
              fgColor="gray"
              bgColor="black"
              />
        </motion.div>

         <motion.div 
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x:0,
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 1.5}}
           className='flex flex-row items-center text-gray-300 cursor-pointer'>
            <SocialIcon
              className="cursor-pointer"
              network="email"
              fgColor="gray"
              bgColor="transparent"
              />
              <p className='uppercase hidden md:inline-flex text sm text-gray-400' >
                Get in touch
              </p>
         </motion.div>
    </header>
  )
}