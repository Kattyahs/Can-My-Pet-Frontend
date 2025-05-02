import { useNavigate } from "react-router-dom";
import AnimalCards from "./components/AnimalCards";
import axios from "axios";
import { useEffect, useState } from "react";
import { Animal } from "../../types/index";
import { Mosaic } from "react-loading-indicators";

export default function AnimalGallery() {
  const [animals, setAnimals] = useState<Animal[] | null>(null);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Animal[]>(`${API_URL}/pet/readAll`);
        setAnimals(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [API_URL]);

  const navigate = useNavigate();
  const handleCardClick = (animal: Animal) => {
    navigate(`/animals/${animal.name}`, { state: { animal } });
  };
  if (animals === null) {
    return (
      <div className="p-8 grid place-items-center min-h-screen w-full">
        <Mosaic color="#32cd32" size="large" text="Cargando..." textColor="" />
      </div>
    );
  } else {
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
    );
  }
}
