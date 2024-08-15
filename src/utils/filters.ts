

import { AnimalFoodPermission } from '../types';
import { animalFoodPermissions } from '../data/animalFoodPermission.ts';

export function filterFoodsByAnimalAndPermission(
  animalName: string, 
  isAllowed?: boolean 
): AnimalFoodPermission[] {
    console.log(animalName, isAllowed)
  return animalFoodPermissions.filter(permission => 
    permission.animal.animalName === animalName &&
    (isAllowed === undefined || permission.isAllowed === isAllowed)
  );
}
