import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import AboutMe from './Components/About Me/AboutMe';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <AboutMe/>
      <Footer />
    </div>
  );
}

export default App;
