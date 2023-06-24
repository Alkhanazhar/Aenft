import './App.css';
import About from './Componenets/About/About';
import Accordian from './Componenets/Accordian/Accordian';
import Cards from './Componenets/Cards/Cards';
import Community from './Componenets/Community/Community';
import Footer from './Componenets/Footer/Footer';
import Navbar from './Componenets/Header/Navbar';
import Hero from './Componenets/Hero/Hero';
import Minting from './Componenets/Minting/Minting';
import Roadmap from './Componenets/ROadmap/Roadmap';
import Team from './Componenets/Team/Team';
import Shopping from './Componenets/shopping';

function App() {
  return (
   <div>
   <Navbar />
   <Hero />
   <About />
   <Cards />
   <Minting />
   <Team />
   {/* <Roadmap />
   <Accordian /> */}
   <Community />
   <Footer />
   </div>
  );
}

export default App;
