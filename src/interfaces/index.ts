import { type } from "os"


export type category = {    
  id : number 
  name : string,
  image : string
}

export type product = {
  description : string,
  category : category
  id : number,
  price : number,
  title : string,
  dummyImage : string
}

export type cartItem = {
  id:number
  name :string,
  price:number,
  quantity : number,
  image:string
}

export type item = {
  name : string,
  id: string
  
}
