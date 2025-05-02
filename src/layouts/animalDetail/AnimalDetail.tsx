import { useEffect, useState } from "react";
import FoodCards from "./components/FoodCards";
import { useLocation } from "react-router-dom";
import { AnimalFoodPermission, TypeFood } from "../../types";
import axios from "axios";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { Mosaic } from "react-loading-indicators";

export default function AnimalDetail() {
  //fetching
  const [categories, setCategories] = useState<TypeFood[]>([]);
  const [foodForAnimalSelected, setFoodForAnimalSelected] = useState<
    AnimalFoodPermission[] | null
  >(null);

  //filtros
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isAllowed, setIsAllowed] = useState<boolean | undefined>(undefined);
  const [categoryFilter, setCategoryFilter] = useState<string>("");

  //Variables a usar en el codigo
  const location = useLocation();
  const animal = location.state.animal;
  const API_URL = import.meta.env.VITE_API_URL;
  const [foodForAnimalSelectedFiltered, setFoodForAnimalSelectedFiltered] =
    useState<AnimalFoodPermission[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //console.log("animal solicitado", animal.name);
        const response1 = await axios.get<TypeFood[]>(
          `${API_URL}/typeFood/readAll`
        );
        //console.log("tipo de comidas existentes:", response1.data);
        setCategories(response1.data);
        const response2 = await axios.get<AnimalFoodPermission[]>(
          `${API_URL}/canmypeteatrelation/readByIdPet/${animal.id}`
        );
        //console.log("comidas existentes para esa mascota:", response2.data);
        setFoodForAnimalSelected(response2.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [API_URL, animal.id, animal.name]);
  useEffect(() => {
    if (foodForAnimalSelected != null) {
      setFoodForAnimalSelectedFiltered(
        foodForAnimalSelected
          .filter((food) =>
            searchTerm != ""
              ? food.Food?.name
                  .toLowerCase()
                  .startsWith(searchTerm.toLowerCase())
              : true
          )
          .filter((food) =>
            categoryFilter == ""
              ? true
              : food.Food?.TypeFood?.name == categoryFilter
          )
          .filter((food) =>
            typeof isAllowed != "undefined" ? food.isAllowed == isAllowed : true
          )
      );
    }
  }, [searchTerm, isAllowed, categoryFilter, foodForAnimalSelected]);

  if (foodForAnimalSelected != null) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        {/* Título con icono */}
        <div className="flex items-center mb-6 space-x-4">
          {/* Imagen de la mascota */}
          <img
            src={animal.image}
            alt={`Avatar de ${animal.name}`}
            className="w-10 h-10 rounded-full border-2 border-blue-400 shadow-sm"
          />

          {/* Título y nombre */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              Buscador de comidas para{" "}
              <span className="text-blue-600">{animal.name}</span>
            </h2>
            <p className="text-sm text-gray-500">
              Selecciona la comida adecuada para tu mascota
            </p>
          </div>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap gap-6 mb-6">
          {/* Input búsqueda */}
          <div className="relative w-full sm:w-1/3">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar comida"
              className="p-3 pl-10 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <MagnifyingGlassIcon className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>

          {/* Select categoría */}
          <div className="w-full sm:w-1/4">
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Todas las categorías</option>
              {categories.map((category) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          {/* Botones de filtro de permisos */}
          <div className="flex gap-2 w-full sm:w-1/3">
            <button
              className={`flex-1 px-4 py-2 rounded-md transition-all ${
                isAllowed === true
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-green-100"
              }`}
              onClick={() => setIsAllowed(true)}
            >
              Permitidos
            </button>
            <button
              className={`flex-1 px-4 py-2 rounded-md transition-all ${
                isAllowed === false
                  ? "bg-red-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-red-100"
              }`}
              onClick={() => setIsAllowed(false)}
            >
              No Permitidos
            </button>
            <button
              className={`flex-1 px-4 py-2 rounded-md transition-all ${
                isAllowed === undefined
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-blue-100"
              }`}
              onClick={() => setIsAllowed(undefined)}
            >
              Todos
            </button>
          </div>
        </div>

        {/* Resultados */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {foodForAnimalSelectedFiltered.map((food) => (
            <FoodCards key={food.id} animalFoodPermission={food} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        {/* Título con icono */}
        <div className="flex items-center mb-6 space-x-4">
          {/* Imagen de la mascota */}
          <img
            src={animal.image}
            alt={`Avatar de ${animal.name}`}
            className="w-10 h-10 rounded-full border-2 border-blue-400 shadow-sm"
          />

          {/* Título y nombre */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              Buscador de comidas para{" "}
              <span className="text-blue-600">{animal.name}</span>
            </h2>
            <p className="text-sm text-gray-500">
              Selecciona la comida adecuada para tu mascota
            </p>
          </div>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap gap-6 mb-6">
          {/* Input búsqueda */}
          <div className="relative w-full sm:w-1/3">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar comida"
              className="p-3 pl-10 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <MagnifyingGlassIcon className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>

          {/* Select categoría */}
          <div className="w-full sm:w-1/4">
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Todas las categorías</option>
              {categories.map((category) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          {/* Botones de filtro de permisos */}
          <div className="flex gap-2 w-full sm:w-1/3">
            <button
              className={`flex-1 px-4 py-2 rounded-md transition-all ${
                isAllowed === true
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-green-100"
              }`}
              onClick={() => setIsAllowed(true)}
            >
              Permitidos
            </button>
            <button
              className={`flex-1 px-4 py-2 rounded-md transition-all ${
                isAllowed === false
                  ? "bg-red-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-red-100"
              }`}
              onClick={() => setIsAllowed(false)}
            >
              No Permitidos
            </button>
            <button
              className={`flex-1 px-4 py-2 rounded-md transition-all ${
                isAllowed === undefined
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-blue-100"
              }`}
              onClick={() => setIsAllowed(undefined)}
            >
              Todos
            </button>
          </div>
        </div>

        {/* Resultados */}
        <div className="p-8 grid place-items-center min-h-screen w-full">
          <Mosaic
            color="#32cd32"
            size="large"
            text="Cargando..."
            textColor=""
          />
        </div>
      </div>
    );
  }
}
