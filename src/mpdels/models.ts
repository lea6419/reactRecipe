
export  interface User {
    id?:number;
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    address?: string;
    phone?: string;
  }
 export interface Recipe{
    id?:number,
    authorId?:number
    title?:string,
    description?:string,
    ingredients?:string[]
    instructions?:string
  }
