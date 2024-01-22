export const productList:Product[] = [
    {
        id:1,
        name:'Lavandina',
        price:10,
        description:'Botella de lavandina'
    },
    {
        id:2,
        name:'Detergente',
        price:5,
        description:'Detergente quita grasa'
    },
    {
        id:3,
        name:'Limpia vidrios',
        price:7,
        description:'Limpiado de vidrios pequeño'
    },
    {
        id:4,
        name:'Guantes',
        price:3
    },
    {
        id:5,
        name:'Escurridor',
        price:6,
        description:'Escurridor verde'
    }

]

export interface Product{
    id:number | string;
    name:string;
    price:number;
    description?:string;
}