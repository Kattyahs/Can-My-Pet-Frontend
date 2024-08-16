import  { useState } from 'react';
import FoodCards from './FoodCards';
import { useLocation } from 'react-router-dom';
import { Animal } from '../types';
import filterFoodsByAnimalAndPermission from '../utils/filters';

type AnimalSearchProps = {
}
interface LocationState  {
  animal: Animal; 
}
export default function AnimalSearch({  }: AnimalSearchProps) {
  const [isAllowed, setIsAllowed] = useState<boolean | undefined>(undefined);

  const location = useLocation();
  const state = location.state as LocationState;
  const animal = state.animal;
  console.log(animal?.name);


    /*const navigate = useNavigate();
    const { animalName } = useParams<{ animalName: string }>();
    useEffect(() => {
        if (!animalName) {
            navigate('/animals');
        }
    }, [animalName]);*/
    

    const filteredFoods = animal.id ? filterFoodsByAnimalAndPermission(animal.id, isAllowed) : [];
    console.log(filteredFoods);

  /*useEffect(() => {
    console.log(filteredFoods)
    }, [filteredFoods]);
*/

  return (
    
    <div>
      {/* Barra de filtrado */}
      <div className="flex justify-center space-x-4 mb-6">
        <button 
          className={`px-4 py-2 rounded ${isAllowed === true ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-800'}`}
          onClick={() => setIsAllowed(true)}
        >
          Permitidos
        </button>
        <button 
          className={`px-4 py-2 rounded ${isAllowed === false ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-800'}`}
          onClick={() => setIsAllowed(false)}
        >
          No Permitidos
        </button>
        <button 
          className={`px-4 py-2 rounded ${isAllowed === undefined ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
          onClick={() => setIsAllowed(undefined)}
        >
          Todos
        </button>
      </div>

      
      <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 m-4">
        {filteredFoods.map((filteredFood) => (
            
          <FoodCards 
            key={filteredFood.id}
            animalFoodPermission={filteredFood}
            onClick={() => {}}
          />
        ))}


      </div>
    </div>
  );
}
