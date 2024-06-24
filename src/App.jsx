import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const  App = () => {

  return (
    <>
    <Router>
      <div className='relative z-0 bg-primary'>
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar />
            <Hero />
          </div>
      </div>
    </Router>
    </>
  )
}

export default App
