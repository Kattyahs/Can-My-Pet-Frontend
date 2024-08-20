import { useNavigate } from "react-router-dom";
import AnimalCards from "./AnimalCards"
import axios from 'axios';
import { useEffect, useState } from "react";
import { Animal } from "../types/index";

export default function AnimalSelection( ) {
    const [animals, setAnimals] = useState<Animal[]>([]);
    const API_URL = import.meta.env.VITE_API_URL;

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get<Animal[]>(`${API_URL}/pet/readAll`);
            setAnimals(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, [API_URL]);
      


    const navigate = useNavigate();
    const handleCardClick = (animal: Animal) => {
        navigate(`/animals/${animal.name}`, { state: { animal } });
    }
  return (
        <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {animals.map((animal) => (
            <AnimalCards
            key={animal.name}
            animal={animal}
            onClick={() => handleCardClick(animal)}
            />
            ))}

        </div>
  )
}
