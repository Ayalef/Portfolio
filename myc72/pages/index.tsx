import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Bugtracker from '../components/Bugtracker'



const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll'>
      <Head >
         <title>Portfolio </title>
      </Head>
      
      <Header />
      <section id="hero" className='snap-start'>
        <Hero />
      </section>

      <section id="about" className='snap-center' >
        <About />
      </section>

      <section id="skills" className='snap-center' >
        <Skills />
      </section>

      <section id="projects" className='snap-center' >
        <Projects />
      </section>

      <section id="Bugtracker" className='snap-center' >
        <Bugtracker />
      </section>

        
    </div>
  )
}

export default Home