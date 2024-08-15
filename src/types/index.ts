

export type Animal = {
    animalName: string;
    animalImage: string;
}

export type Food = {
    foodName: string;
    foodImage: string;
    foodType: string;
    foodDescription: string;
}

export type AnimalFoodPermission = {
    animal: Animal;
    food: Food;
    isAllowed: boolean;
}