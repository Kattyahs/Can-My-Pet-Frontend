import { useNavigate } from "react-router-dom";

function Index() {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate("/animals");
  };
  return (
    <section
      className="relative bg-cover bg-center py-20"
      style={{
        backgroundImage:
          "url('https://www.nestle-centroamerica.com/sites/g/files/pydnoa521/files/styles/webp_image/public/2022-10/Purina.jpg.webp?itok=ngHedpPP')",
      }}
    >
      {/* Capa semi-transparente para mejorar la legibilidad del texto */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>

      {/* Contenedor de texto con fondo semi-transparente */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center text-white px-4 py-8 bg-black bg-opacity-50 rounded-lg">
        <h2 className="text-4xl font-extrabold mb-6 animate__animated animate__fadeIn animate__delay-1s">
          Alimenta a tus mascotas con seguridad
        </h2>
        <p className="text-xl mb-6 animate__animated animate__fadeIn animate__delay-1.5s">
          Guía para buscar los alimentos que tu mascota puede y no puede comer.
        </p>
        <p className="text-lg mb-10 animate__animated animate__fadeIn animate__delay-2s text-red-600">
          Nosotros no reemplazamos la supervisión de un veterinario...
        </p>

        {/* Botón con animación */}
        <button
          className="bg-primary text-white px-8 py-3 rounded-lg shadow-lg hover:bg-emphasis transition-all duration-300 animate__animated animate__zoomIn animate__delay-2.5s"
          onClick={handleStartClick}
        >
          Empieza a Buscar
        </button>
      </div>
      {/* Testimonios */}
      <div className="flex flex-col items-center mt-12">
        <h3 className="text-2xl font-semibold text-primary mb-4">
          Lo que dicen nuestros usuarios
        </h3>
        <div className="flex space-x-8">
          <div className="bg-white p-6 rounded-lg shadow-lg w-72">
            <p className="text-lg text-charcoal mb-4">
              "Esta guía me ayudó a encontrar lo que mi perro puede comer, ¡muy
              útil!"
            </p>
            <p className="text-sm text-gray-500">- Juan P.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg w-72">
            <p className="text-lg text-charcoal mb-4">
              "Gracias a este servicio, pude asegurarme de que mi gato esté a
              salvo."{" "}
            </p>
            <p className="text-sm text-gray-500">- Ana G.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Index;
