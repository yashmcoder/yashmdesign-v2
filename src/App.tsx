import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Values from './components/Values';
import FeaturedProjects from './components/FeaturedProjects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Navigation />
      <Hero />
      <Values />
      <FeaturedProjects />
      <Footer />
    </div>
  );
}

export default App;
