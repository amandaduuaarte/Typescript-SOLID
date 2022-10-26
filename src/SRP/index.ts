import { Mensaging } from './services/mensage';
import { Order } from './entities/order';
import { Persistency } from './services/persistancy';
import { Product } from './entities/product';
import { ShoppingCart } from './entities/shoppingCart';

/**
 * Main (client code)
 */
const shoppingCart = new ShoppingCart();
const message = new Mensaging();
const persistancy = new Persistency();
const order = new Order(shoppingCart, message, persistancy);

shoppingCart.addItem(new Product('Celular', 1200));
shoppingCart.addItem(new Product('Xbox', 4200));
shoppingCart.addItem(new Product('Notebook', 6000));

console.log(shoppingCart.total());


order.checkout();
