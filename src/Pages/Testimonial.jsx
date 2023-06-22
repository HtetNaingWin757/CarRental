import React from 'react'
import Hero from '../Components/Hero'
import Testimonials from "../Components/Testimonials";
import BookSection from '../Components/BookSection'
import Footer from '../Components/Footer'

const Testimonial = () => {
  return (
    <div>
      <Hero text={"Testimonials"}/>
      <Testimonials/>
      <BookSection/>
      <Footer/>
    </div>
  )
}

export default Testimonial