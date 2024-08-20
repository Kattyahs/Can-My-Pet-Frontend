import  { useEffect, useState } from 'react';
import FoodCards from './FoodCards';
import { useLocation } from 'react-router-dom';
import { Animal, TypeFood } from '../types';
import filterFood from '../utils/filters';
import axios from 'axios';
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';

type AnimalSearchProps = {
}
type LocationState =  {
  animal: Animal; 
}
export default function AnimalSearch({  }: AnimalSearchProps) {
  const [isAllowed, setIsAllowed] = useState<boolean | undefined>(undefined);
  const [categoryFilter, setCategoryFilter] = useState<string>('');
  const [categories, setCategories] = useState<TypeFood[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');


  const location = useLocation();
  const state = location.state as LocationState;
  const animal = state.animal;

  const API_URL = import.meta.env.VITE_API_URL;
    
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<TypeFood[]>(`${API_URL}/typeFood/readAll`);
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [API_URL]);
    

    const filteredFoods = animal.id ? filterFood(animal.id, isAllowed,categoryFilter,searchTerm) : [];
    


  return (
    
    <div className='bg-white p-4 rounded-lg shadow-md space-x-4 mb-6'>
      <div className='flex  flex-wrap space-x-4'>
        <div className="flex-grow w-1/3">
          <input 
            type="text" 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar comida"
            className="p-2 pl-10 border rounded-md w-full"
          />
          <MagnifyingGlassIcon className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
        </div>

        <div className=' relative w-1/3'>
          <select 
            value={categoryFilter} 
            onChange={(e) => setCategoryFilter(e.target.value)} 
            className="p-2 border rounded-md w-full mb-2"
          >
          <option  value=''>Todos</option>
          {categories.map((category) => (
            <option key={category.id} value={category.name}>{category.name}</option>
          ))}

          </select>
        </div>

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
