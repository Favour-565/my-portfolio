import React from 'react'
import Header from './component/header/header'
import Nav from './component/nav/nav'
import About from './component/about/About'
import Experience from './component/experience/experience'
import Services from './component/services/services'
import Portfolio from './component/portfolio/portfolio'
import Testimonial from './component/testimonials/testimonials'
import Contact from './component/contact/contact'
import Footer from './component/footer/footer'

const App = () => {
  return (
    <>

        <Header/>   
        <Nav/>
        <About/>
        <Experience/>
        <Services/>
        <Portfolio/>
        <Testimonial/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default App