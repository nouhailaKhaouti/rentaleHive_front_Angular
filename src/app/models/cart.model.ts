export interface Cart {
  items: Array<CartItem>;
}

export interface CartItem {
  equipment: string;
  name: string;
  price: number;
  quantity: number;
  id: number;
}
