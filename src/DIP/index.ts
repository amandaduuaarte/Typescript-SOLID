/**
 * 1. Módulos de alto nível não devem depender de módulos de baixo nível. 
 * Ambos devem depender da abstração.
 * 2. Abstrações não devem depender de detalhes. Detalhes devem depender de abstrações.
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
const individualCustomer = new IndividualCustomer('Amanda', "Duarte", "77777777777");

const order = new Order(shoppingCart, message, persistancy, individualCustomer);

shoppingCart.addItem(new Product('Celular', 1200));
shoppingCart.addItem(new Product('Xbox', 4200));
shoppingCart.addItem(new Product('Notebook', 6000));

console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());


order.checkout();
