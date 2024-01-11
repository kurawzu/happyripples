import './App.css'
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import Rooms from './components/pages/Rooms'
import Activities from './components/pages/Activities'
import About from './components/pages/About'
import Offer from './components/Offer'
import Footer from './components/Footer'

function App() {
  
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
    <Navbar scrollToSection={scrollToSection} />
    <Home scrollToSection={scrollToSection}/>
    <Rooms />
    <About />
    <Offer />
    <Activities />
    <Footer />
    
    
      
    </>
  )
}

export default App
