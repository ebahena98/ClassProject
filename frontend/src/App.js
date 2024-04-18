import './App.css';
import Navbar from './Navbar';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Signup from './pages/Signup';
import {Route, Routes} from "react-router-dom";



function App() {

  return (
    <>
      <Navbar />
      <div className="container">
      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path ="/pricing" element={<Pricing />} />
        <Route path ="/about" element={<About />} />
        <Route path ="/signup" element={<Signup />} />
      </Routes>
      </div>
    </>
  )
}

export default App;
