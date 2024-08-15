import { useNavigate } from "react-router-dom";
function Header() {
    const navigate = useNavigate();
    return (
        <header className="bg-primary text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 onClick={()=>navigate('/')} className="text-xl font-bold">Can my pet?</h1>
            <nav>
              <ul className="flex space-x-4">
                <li><button onClick={()=>navigate('/')} className="hover:text-emphasis">Inicio</button></li>
                <li><button onClick={()=>navigate('about')} className="hover:text-emphasis">Sobre</button></li>
                <li><button onClick={()=>navigate('/contact')} className="hover:text-emphasis">Contacto</button></li>
              </ul>
            </nav>
          </div>
        </header>
      );
}

export default Header;

