import About from "./About/About"
import Experience from "./Experience/Experience"
import Hero from "./Hero/Hero"
import Project from "./Project/Project"
import Skills from "./Skills/Skills"

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Project />
      <Experience />
    </div>
  )
}
export default Home
