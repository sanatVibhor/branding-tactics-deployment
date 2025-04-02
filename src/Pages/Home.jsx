import React from 'react'
import Navbar from '../Components/Navbar'
import LoaderHomePage from '../Components/LoaderHomePage'
import BookCall from '../Components/BookCall'
import BuildingBrandGrid from '../Components/BuildingBrandGrid'
import FooterComponent from '../Components/Footer'
import VisionaryBrand from '../Components/VisionaryBrand'
import ProjectHome from '../Components/ProjectHome'
import About from '../Components/About'
import GetInTouch from '../Components/GetInTouch'
import Services from '../Components/Services'


const Home = () => {
  return (
    <div>
      {/* <Navbar/>
      <LoaderHomePage/>
      <BookCall/> */}
   
      <VisionaryBrand />

      <BuildingBrandGrid/>
      <Services/>
  
      <ProjectHome/>

      <About/>
      <GetInTouch/>
      {/* <FooterComponent/> */}
    </div>
  )
}

export default Home