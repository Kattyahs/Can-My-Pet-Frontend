

import {  AnimalFoodPermission } from '../types';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function filterFoodsByAnimalAndPermission(animalId: number, isAllowed: boolean | undefined) {
    const [data, setData] = useState<AnimalFoodPermission[]>([]);
    const API_URL = import.meta.env.VITE_API_URL;
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get<AnimalFoodPermission[]>(`${API_URL}/canmypeteatrelation/readAll`);
          setData(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      fetchData();
    }, [API_URL]);
    console.log(isAllowed);
    
  return data.filter(permission => 
    permission.idPet === animalId &&
    (isAllowed === undefined || permission.isAllowed === isAllowed)
  );
}
