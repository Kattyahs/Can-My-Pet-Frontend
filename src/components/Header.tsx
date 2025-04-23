import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="bg-primary text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1
          onClick={() => navigate("/")}
          className="text-xl font-bold cursor-pointer"
        >
          Can my pet?
        </h1>

        {/* Menú de navegación */}
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <button
                onClick={() => navigate("/")}
                className="hover:text-emphasis"
              >
                Inicio
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("about")}
                className="hover:text-emphasis"
              >
                Sobre
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/contact")}
                className="hover:text-emphasis"
              >
                Contacto
              </button>
            </li>
          </ul>
        </nav>

        {/* Menú móvil */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl"
          >
            &#9776;
          </button>
        </div>
      </div>

      {/* Menú desplegable en móvil */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary text-white p-4 mt-4">
          <ul className="space-y-4">
            <li>
              <button
                onClick={() => navigate("/")}
                className="hover:text-emphasis"
              >
                Inicio
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("about")}
                className="hover:text-emphasis"
              >
                Sobre
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/contact")}
                className="hover:text-emphasis"
              >
                Contacto
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
