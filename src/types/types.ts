//TYPES

//--TS Type
type Guitar = {
    id: number,
    name: string,
    image: string,
    description: string,
    price: number,
}


//--TS Type Herencia
type CartItem = Guitar & {
    quantity: number;
}

/*
1) Herencia Explicita
type CartItem = Guitar & {
    quantity:number;
}
*/

/*
2) Utility Types 
https://www.typescriptlang.org/docs/handbook/utility-types.html

-Selección
type CartItem = Pick<Guitar, 'id' | 'name' | 'price'> & {
    quantity:number;
}

-Omisión
type CartItem = Omit<Guitar, 'id' | 'name' | 'price'> & {
    quantity:number;
}
*/

export type {
    Guitar, 
    CartItem
}