import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AnimalSelection from "./components/AnimalSelection";
import AnimalSearch from "./components/AnimalSearch";

function App() {


  //const filters = ['Comida que sí puede comer', 'Comida que no puede comer', 'Carnes', 'Vegetales', 'Frutas', 'Cereales'];


  return (
    <Router>

    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-background">
        <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/animals" element= {<AnimalSelection  />} />
        <Route path="/animals/:animalName" element= {<AnimalSearch  />} />

        </Routes>
      </main>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
