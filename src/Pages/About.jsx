import React from 'react'
import Hero from '../Components/Hero'
import Plan from '../Components/Plan'
import Footer from '../Components/Footer'
import AboutCompany from '../Components/AboutCompany'
import BookSection from '../Components/BookSection'

const About = () => {
  return (
    <div>
      <Hero text={"About"}/>
      <AboutCompany/>
      <Plan/>
      <BookSection/>
      <Footer/>
    </div>
  )
}

export default About