export interface IProduct {
  id: number
  name: string
  brand: string
  description: string
  photo: string
  price: string
  total?: number
}

export interface IProductCart {
  id: number
  name: string
  photo: string
  price: string
  quantity: number
}