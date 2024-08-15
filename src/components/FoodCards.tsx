import type { AnimalFoodPermission } from "../types";

type FoodCardProps = {
    animalFoodPermission: AnimalFoodPermission;
    onClick: () => void;
    }

export default function FoodCards({animalFoodPermission, onClick}: FoodCardProps) {
  return (
    <div 
        className={`bg-white border shadow-lg overflow-hidden cursor-pointer
        transform hover:-translate-y-1 transition-all duration-200 rounded-xl font-sans
        ${animalFoodPermission.isAllowed ? 'border-green-200 hover:border-green-500 hover:shadow-green-200' : 
                    'border-red-200 hover:border-red-500 hover:shadow-red-200'}`}
        onClick={onClick}
    >

        <img 
            src={animalFoodPermission.food.foodImage} 
            alt={animalFoodPermission.food.foodName} 
            className="w-full h-48 object-cover"
        />
        <div className="p-4">
            <h3 className="text-lg font-semibold">{animalFoodPermission.food.foodName}</h3>
            <span className="text-sm bg-gray-200 text-gray-800 px-3 py-1 rounded-full">{animalFoodPermission.food.foodType}</span>
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
