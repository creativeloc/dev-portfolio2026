"use client"

import { useEffect } from "react"
import About from "./About/About"
import ClientReview from "./ClientReview/ClientReview"
import Contact from "./Contact/Contact"
import Experience from "./Experience/Experience"
import Hero from "./Hero/Hero"
import Project from "./Project/Project"
import Skills from "./Skills/Skills"

import AOS from "aos"
import "aos/dist/aos.css" // You can also use <link> for styles

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos")
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom"
      })
    }
    initAOS()
  }, [])

  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Project />
      <Experience />
      <ClientReview />
      <Contact />
    </div>
  )
}
export default Home
