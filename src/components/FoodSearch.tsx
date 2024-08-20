import { useState } from 'react';



export default function FoodSearch() {    
    const [searchTerm, setSearchTerm] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');




  return (
    <div className="p-4">
    <div className="mb-4">
      <input 
        type="text" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        placeholder="Buscar..." 
        className="p-2 border rounded-md w-full"
      />
    </div>

    <div className="mb-4">
      <select 
        value={categoryFilter} 
        onChange={(e) => setCategoryFilter(e.target.value)} 
        className="p-2 border rounded-md w-full mb-2"
      >
        <option value="">Todos los tipos</option>
        <option value="Fruit">Frutas</option>
        <option value="Vegetable">Vegetales</option>
        <option value="Sweet">Dulces</option>
   
      </select>


    </div>

  </div>
  )
}
