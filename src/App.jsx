
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {


  return (
<div className="portfolio-wrapper"> 
      <NavBar />
      <main> 
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
