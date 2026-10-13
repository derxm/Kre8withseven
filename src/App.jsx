import './styles/global.css';
import './styles/navbar.css';
import './styles/hero.css';
import './styles/portfolio.css';
import './styles/components.css';
import { MotionConfig } from 'framer-motion';

import Navbar          from './components/Navbar';
import Hero            from './components/Hero';
import About           from './components/About';
import Services        from './components/Services';
import Portfolio       from './components/Portfolio';
import FeaturedProject from './components/FeaturedProject';
import CreativeProcess from './components/CreativeProcess';
import Contact         from './components/Contact';
import Footer          from './components/Footer';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <>
        <Navbar />
        <main id="main-content">
          <Hero />
          <About />
          <Services />
          <Portfolio />
          <FeaturedProject />
          <CreativeProcess />
          <Contact />
        </main>
        <Footer />
      </>
    </MotionConfig>
  );
}
