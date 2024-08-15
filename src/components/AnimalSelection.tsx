import { useNavigate } from "react-router-dom";
import AnimalCards from "./AnimalCards"
import { animals } from "../data/animals"

type Animal = {
    animalName: string;
    animalImage: string;
    }

export default function AnimalSelection( ) {
    const navigate = useNavigate();
    const handleCardClick = (animal: Animal) => {
        navigate(`/animals/${animal.animalName}`, {state: { animal }});
    }
  return (
        <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {animals.map((animal) => (
        <AnimalCards
            key={animal.animalName}
            animal={animal}
            onClick={() => handleCardClick(animal)}
        />
        ))}

        </div>
  )
}
