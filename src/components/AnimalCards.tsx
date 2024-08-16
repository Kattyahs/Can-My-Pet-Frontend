import type { Animal } from "../types";
type AnimalCardProps = {
    animal: Animal;
    onClick: () => void;
  }
  
  
  export default function AnimalCards( {animal, onClick}: AnimalCardProps) {
    return (
        <div 
          className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
          onClick={onClick}
        >
          <img 
            src={animal.image} 
            alt={animal.name} 
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{animal.name}</h3>
          </div>
        </div>
    )
  }
  

  