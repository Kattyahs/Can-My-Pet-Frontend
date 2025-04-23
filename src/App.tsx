import Header from "./components/Header";
import Index from "./layouts/index/Index";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AnimalGallery from "./layouts/animalGallery/AnimalGallery";
import AnimalDetail from "./layouts/animalDetail/AnimalDetail";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow bg-background">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/animals" element={<AnimalGallery />} />
            <Route path="/animals/:animalName" element={<AnimalDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
