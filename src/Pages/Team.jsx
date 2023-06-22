import React from 'react'
import Hero from "../Components/Hero"
import OurTeam from '../Components/OurTeam'
import BookSection from '../Components/BookSection'
import Footer from '../Components/Footer'

const Team = () => {
  return (
    <div>
      <Hero text={"Our Team"}/>
      <OurTeam/>
      <BookSection/>
      <Footer/>
    </div>
    
  )
}

export default Team