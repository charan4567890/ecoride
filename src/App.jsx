import { Route, Routes } from 'react-router-dom';
import './App.css'
import { Navbar } from "./components/Navbar"
import Home from './components/pages/Home';
import Booking from './components/pages/Booking';
import About from './components/pages/About';
import Rating from './components/pages/Rating';
import Services from './components/pages/Services';


function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/booking" element= {<Booking/>}/>
        <Route path="/about" element= {<About/>}/>
        <Route path="/services" element= {<Services/>}/>
        <Route path="/rating" element= {<Rating/>}/>
      </Routes>
    </div>
  )
}

export default App;
