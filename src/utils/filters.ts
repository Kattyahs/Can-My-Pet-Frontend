

import {  AnimalFoodPermission } from '../types';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default  function filterFood(animalId: number, isAllowed: boolean | undefined, typeOfFood:string ) {
    const [data, setData] = useState<AnimalFoodPermission[]>([]);
    const API_URL = import.meta.env.VITE_API_URL;
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get<AnimalFoodPermission[]>(`${API_URL}/canmypeteatrelation/readByIdPet/${animalId}`);
          setData(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      fetchData();
    }, [API_URL]);

  return data.filter(result => 
    result.idPet === animalId &&
    (isAllowed === undefined || result.isAllowed === isAllowed)  &&
    (typeOfFood === '' || result.Food?.TypeFood?.name === typeOfFood)
  );
}
