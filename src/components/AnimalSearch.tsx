import  { useEffect, useState } from 'react';
import { filterFoodsByAnimalAndPermission } from '../utils/filters';
import FoodCards from './FoodCards';
import { useLocation } from 'react-router-dom';
import { Animal } from '../types';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

type AnimalSearchProps = {
  //animalName: string;
}

export default function AnimalSearch({  }: AnimalSearchProps) {
  // Estado para controlar el filtro de isAllowed
  const [isAllowed, setIsAllowed] = useState<boolean | undefined>(undefined);


  /*const location = useLocation();
  const animal = location.state as Animal;
  useEffect(() => {
    console.log(animal)
    });*/
    const navigate = useNavigate();
    const { animalName } = useParams<{ animalName: string }>();
    useEffect(() => {
        if (!animalName) {
            navigate('/animals');
        }
    }, [animalName]);


    const filteredFoods = animalName ? filterFoodsByAnimalAndPermission(animalName, isAllowed) : [];

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
            key={filteredFood.food.foodName}
            animalFoodPermission={filteredFood}
            onClick={() => {}}
          />
        ))}


      </div>
    </div>
  );
}
