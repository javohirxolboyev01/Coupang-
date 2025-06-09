import React from 'react'
import Hero from '../../components/Hero/Hero'
import InfoSection from '../../components/InfoSection/InfoSection'
import Category from '../../components/Category/Category'


const Home = () => {
  return (
    <div className=' px-4 md:px-16 lg:px-24'>
      <div>
        <Hero/>
        <InfoSection/>
        <Category/>
      </div>
    </div>
  )
}

export default Home
