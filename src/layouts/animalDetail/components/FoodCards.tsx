import type { AnimalFoodPermission } from "../../../types";

type FoodCardProps = {
  animalFoodPermission: AnimalFoodPermission;
};

export default function FoodCards({ animalFoodPermission }: FoodCardProps) {
  return (
    <div
      className={`bg-white border shadow-lg overflow-hidden cursor-pointer
        transform hover:-translate-y-1 transition-all duration-200 rounded-xl font-sans
        ${
          animalFoodPermission.isAllowed
            ? "border-green-200 hover:border-green-500 hover:shadow-green-200"
            : "border-red-200 hover:border-red-500 hover:shadow-red-200"
        }`}
      onClick={() => {
        console.log(
          "que comida: ",
          animalFoodPermission.Food?.description,
          "porque: ",
          animalFoodPermission.description
        );
      }}
    >
      <img
        src={animalFoodPermission.Food?.image}
        alt={animalFoodPermission.Food?.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">
          {animalFoodPermission.Food?.name}
        </h3>

        {/* Tipo de comida */}
        <span className="text-sm bg-gray-200 text-gray-800 px-3 py-1 rounded-full inline-block mt-1">
          {animalFoodPermission.Food?.TypeFood?.name}
        </span>

        {/* Descripción */}
        {animalFoodPermission.description && (
          <p className="text-sm text-gray-600 mt-2 line-clamp-3">
            {animalFoodPermission.description}
          </p>
        )}

        {/* Estado de permitido / no permitido */}
        <p
          className={`p-1 rounded-full text-xs font-semibold mt-3
      ${
        animalFoodPermission.isAllowed
          ? "bg-green-100 text-green-600 border border-green-200"
          : "bg-red-100 text-red-600 border border-red-200"
      }
      shadow-sm inline-block`}
        >
          {animalFoodPermission.isAllowed ? "Permitido" : "No Permitido"}
        </p>
      </div>
    </div>
  );
}
