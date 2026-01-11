import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../homepage/Hero'
import OurPlatform from './OurPlatform'
import Effective from './Effective'
import SeeOutcomes from './SeeOutcomes'
import About from './About'
import Flexible from './Flexible'
import Footer from '../components/Footer'

const Homepage = () => {
  return (
    <div className='h-auto w-full bg-gray-200'>
        <Hero />  
        <OurPlatform />
        <Effective />
        <SeeOutcomes />
        <About />
        <Flexible />
        <Footer />
    </div>
  )
}

export default Homepage