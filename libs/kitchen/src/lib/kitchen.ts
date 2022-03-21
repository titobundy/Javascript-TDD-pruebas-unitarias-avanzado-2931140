import { Dessert, Dish } from '@yfx-data-models';
import { verify } from './ingredients';

export function kitchen(): string {
  return 'kitchen';
}

const dish: Dish = {
  taste: 'spicy',
  name: 'ceviche',
  country: {
    name: 'Perú',
    language: 'Español'
  },
  available: true
};

const dessert: Dessert = {
  type: 'low-carbs',
  name: 'Picarones'
};

function createOrder<OrderKind>(order: OrderKind): OrderKind {
  // Actions...
  return order;
}

createOrder<Dessert>(dessert);
createOrder<Dish>(dish);

export function validateDish(dish: Dish): boolean {
  const ingredientsInStock = verify(dish).valid;

  // all other actions

  return ingredientsInStock ? true : false;
}