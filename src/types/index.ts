

export type Animal = {
    id: number;
    name: string;
    image: string;
    description: string;
    createdAt: string;
    updatedAt: string;
}

export type Food = {
    id: number;
    name: string;
    image: string;
    description: string;
    idTypeFood: number;
    createdAt: string;
    updatedAt: string;
    TypeFood?: TypeFood;
    
}

export type AnimalFoodPermission = {
    id: number;
    idPet: number;
    idFood: number;
    isAllowed: boolean;
    description: string;
    createdAt: string;
    updatedAt: string;
    Food?: Food;

}

export type TypeFood = {
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
}