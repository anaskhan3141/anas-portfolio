import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import AboutMe from './Components/AboutMe/AboutMe';
import ContactMe from './Components/ContactMe/ContactMe';
import ProjectSection from './Components/Projects/Section/ProjectSection';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <AboutMe/>
      <ProjectSection/>
      <ContactMe/>
      <Footer />
    </div>
  );
}

export default App;
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB80fZw7Nf94LVlpDsMN2zeAXfAKTsc7xI",
  authDomain: "anaskhanportfolio.firebaseapp.com",
  projectId: "anaskhanportfolio",
  storageBucket: "anaskhanportfolio.appspot.com",
  messagingSenderId: "107174633763",
  appId: "1:107174633763:web:65517607d7b4bb56b1ac96",
  measurementId: "G-XDPCBQZTHB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
