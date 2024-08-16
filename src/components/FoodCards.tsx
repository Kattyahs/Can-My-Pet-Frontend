import { useEffect, useState } from "react";
import type { AnimalFoodPermission, Food, TypeFood } from "../types";
import axios from "axios";

type FoodCardProps = {
    animalFoodPermission: AnimalFoodPermission;
    onClick: () => void;
    }

export default function FoodCards({animalFoodPermission, onClick}: FoodCardProps) {
    const [food, setFood] = useState<Food>();
    const [typeFood, setTypeFood] = useState<TypeFood>();
    const API_URL = import.meta.env.VITE_API_URL;
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get<Food>(`${API_URL}/food/readById/${animalFoodPermission.idFood}`);
            setFood(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
  
        fetchData();
      }, [API_URL]);
      useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await axios.get<TypeFood>(`${API_URL}/typeFood/readById/${food?.idTypeFood}`);
                setTypeFood(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    },[food, API_URL]);
  return (
    <div 
        className={`bg-white border shadow-lg overflow-hidden cursor-pointer
        transform hover:-translate-y-1 transition-all duration-200 rounded-xl font-sans
        ${animalFoodPermission.isAllowed ? 'border-green-200 hover:border-green-500 hover:shadow-green-200' : 
                    'border-red-200 hover:border-red-500 hover:shadow-red-200'}`}
        onClick={onClick}
    >

        <img 
            src={food?.image} 
            alt={food?.name} 
            className="w-full h-48 object-cover"
        />
        <div className="p-4">
            <h3 className="text-lg font-semibold">{food?.name}</h3>
            <span className="text-sm bg-gray-200 text-gray-800 px-3 py-1 rounded-full">{typeFood?.name}</span>
            <p className={`p-1 rounded-full text-xs font-semibold ml-4 mt-2
                ${animalFoodPermission.isAllowed ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'} 
                border 
                ${animalFoodPermission.isAllowed ? 'border-green-200' : 'border-red-200'}
                shadow-sm inline-block`}>
                {animalFoodPermission.isAllowed  ? 'Permitido' : 'No Permitido'}
            </p>
        </div>
    </div>
)
  
}
