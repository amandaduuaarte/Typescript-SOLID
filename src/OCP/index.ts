/**
 * Princípio Aberto-Fechado — Objetos ou entidades devem estar abertos para 
 * extensão, mas fechados para modificação
 */

import { Mensaging } from './services/mensage';
import { Order } from './class/order';
import { Persistency } from './services/persistancy';
import { Product } from './class/product';
import { ShoppingCart } from './class/shoppingCart';
import { FiftyPercentDiscount } from './class/discount';

/**
 * Main (client code)
 */
const fiftyPercentDiscount = new FiftyPercentDiscount();
const shoppingCart = new ShoppingCart(fiftyPercentDiscount);
const message = new Mensaging();
const persistancy = new Persistency();
const order = new Order(shoppingCart, message, persistancy);

shoppingCart.addItem(new Product('Celular', 1200));
shoppingCart.addItem(new Product('Xbox', 4200));
shoppingCart.addItem(new Product('Notebook', 6000));

console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());


order.checkout();
