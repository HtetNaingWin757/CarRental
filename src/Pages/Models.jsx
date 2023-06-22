import React from 'react'
import Hero from '../Components/Hero'
import { CAR_MODEL } from '../Components/CarModel'
import VenhicleModels from '../Components/VenhicleModels'
import BookSection from '../Components/BookSection'
import Footer from '../Components/Footer'


const Models = () => {

  const cars = CAR_MODEL

  return (
    <div>
      <Hero text={"Vehicle Models"}/>
      <VenhicleModels key={cars.id} cars={cars}/>
      <BookSection/>
      <Footer/>
    </div>
  )
}

export default Models