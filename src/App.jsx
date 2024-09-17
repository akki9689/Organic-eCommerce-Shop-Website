import './App.css'
import Navbar from './component/common/navbar';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home1 from './pages/homepages/Home1';
import Home2 from './pages/homepages/Home2';
import Home3 from './pages/homepages/Home3';
import Home4 from './pages/homepages/Home4';
import Home5 from './pages/homepages/Home5'
import Product from './component/common/product';

const App = () => {


  useEffect(() => {
    // Initialize AOS animations
    AOS.init({
        once: true,
        duration: 900,
        easing: "ease-out-sine",
        delay: 100,
    })
  }, []);

    AOS.refresh();
 

  return (

    <div className='max-w-[100vw] min-h-screen overflow-x-hidden font-poppins'>
      <Navbar/>
     <Product/>
     <Routes>

      {/* ---------- homepages ------- */}

      <Route path='/' element={<Home1/>}/>
      <Route path='/home2' element={<Home2/>}/>
      <Route path='/home3' element={<Home3/>}/>
      <Route path='/home4' element={<Home4/>}/>
      <Route path='/home5' element={<Home5/>}/>

     </Routes>
    
    </div>
  );
};

export default App;
