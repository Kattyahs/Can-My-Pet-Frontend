import { useNavigate } from 'react-router-dom';


function HeroSection() {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/animals');
  };
    return (
      <section className="bg-background text-text py-20 flex flex-col justify-center items-center space-y-6">
      <h2 className="text-4xl font-extrabold mb-6 text-primary">Alimenta a tus mascotas con seguridad</h2>
      <p className="text-xl mb-6 text-charcoal">Guía para buscar los alimentos que tu mascota puede y no puede comer.</p>
      <p className="text-lg mb-10 text-red-600">Nosotros no reemplazamos la supervisión de un veterinario...</p>
      <button 
      className="bg-primary text-white px-8 py-3 rounded-lg shadow-lg hover:bg-emphasis transition-all duration-300"
      onClick={handleStartClick}
      >
        Empieza a Buscar
      </button>
    </section>
    );
}

export default HeroSection;
