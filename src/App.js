import React, { useEffect } from 'react'
import scrollreveal from "scrollreveal";

import ScrollToTop from './componetnts/ScrollToTop'
import Navbar from './componetnts/Navbar'
import Hero from './componetnts/Hero'
import Services from './componetnts/Services'
import Recommend from './componetnts/Recommend'
import Testimonial from './componetnts/Testimonial'
import Footer from './componetnts/Footer'


export default function App() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true
    })
    sr.reveal(
      `
        nav,
        #hero,
        #services,
        #recommend,
        #testimonials,
        footer
        `,
      {
        opacity: 0,
        interval: 300,
      }
    )
  }, [])

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Hero />
      <Services />
      <Recommend />
      <Testimonial />
      <Footer />
    </>
  )
}
