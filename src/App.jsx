import React, { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import Navbar from './components/Navbar';
import CircularDiv from './components/CircularBorderLoading';
import About from './components/About';
import LandingPage from './components/LandingPage';
import Aura from './components/Aura';
import Pricing from './components/Pricing';
import FeaturesBenefit from './components/FeaturesBenefit';
import HorizontalSlider from './components/HorizontalSlider';
import WhyTrustUs from './components/WhyTrustUs';
import MomentumCardParallax from './components/MomentumCardParallax';
import MomentumHorizontalCard from './components/MomentumHorizontalCard';
import ImageContainer from './components/ImageContainer';
import Footer from './components/Footer';

const App = () => {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -5 * t)),
      smooth: true,
    });
  
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
  
    requestAnimationFrame(raf);
  }, []);
  return (
    <>     
    {/* <CircularDiv/> */}
      <div className=' h-screen w-full bg-black font-[Gilroy]'>
      <LandingPage/> 
      <Navbar/>
      <About/>
      <ImageContainer/>
      <HorizontalSlider/>
        {/* <MomentumHorizontalCard/> */}
      <Pricing/>
      <WhyTrustUs/>
      <Footer/>
    </div>
    
    </>
  )
}

export default App