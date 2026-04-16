import React from 'react'
import Container from '../components/Container'
import Banner from '../Sections/Banner'
import Expertise from '../Sections/Expertise'
import AboutSection from '../Sections/AboutSection'
import RecentWork from '../Sections/RecentWork'
import Pricing from '../Sections/Pricing'
const HomePage = () => {
  return ( 
        <>
            <Banner />
            <Expertise  />
            <AboutSection />
            <RecentWork />
            <Pricing />
        
        </>
  )
}

export default HomePage