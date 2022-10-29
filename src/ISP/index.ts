/**
 *  Interface Segregation Principle:
 * Uma classe não deve ser forçada a implementar interfaces(types ou classes abstratas) e métodos
 * que não irão utilizar.
 * Esse princípio basicamente diz que é melhor criar interfaces mais específicas ao invés de
 * termos uma única interface genérica.
 */

import { Mensaging } from './services/mensage';
import { Order } from './class/order';
import { Persistency } from './services/persistancy';
import { Product } from './class/product';
import { ShoppingCart } from './class/shoppingCart';
import { FiftyPercentDiscount } from './class/discount';
import { IndividualCustomer } from './class/customer';

/**
 * Main (client code)
 */
const fiftyPercentDiscount = new FiftyPercentDiscount();
const shoppingCart = new ShoppingCart(fiftyPercentDiscount);
const message = new Mensaging();
const persistancy = new Persistency();
const individualCustomer = new IndividualCustomer(
  'Amanda',
  'Duarte',
  '777.777.777-77',
);

const order = new Order(shoppingCart, message, persistancy, individualCustomer);

shoppingCart.addItem(new Product('Celular', 1200));
shoppingCart.addItem(new Product('Xbox', 4200));
shoppingCart.addItem(new Product('Notebook', 6000));

console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());

order.checkout();
