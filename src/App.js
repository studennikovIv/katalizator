import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import StagesSale from './components/StagesSale/StagesSale';
import PriseCatalizator from './components/PriseCatalizator/PriseCatalizator';
import WhyAreWe from './components/WhyAreWe/WhyAreWe';
import AboutUs from './components/AboutUs/AboutUs';
import AvtoImg from 'components/AvtoImg/AvtoImg';
function App() {
  return (
    <>
      <div className="HeroBg">
        <div className="Conteiner">
          <Header />
          <Hero />
        </div>
      </div>
      <div className="Conteiner">
        <StagesSale />
        <PriseCatalizator />
        <WhyAreWe />
        <AboutUs />
      </div>
      <AvtoImg />
      <div className="Conteiner">
        <Footer />
      </div>
    </>
  );
}

export default App;
