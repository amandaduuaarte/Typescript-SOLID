import { Mensaging } from './SRP/services/mensage';
import { Order } from './SRP/entities/order';
import { Persistency } from './SRP/services/persistancy';
import { Product } from './SRP/entities/product';
import { ShoppingCart } from './SRP/entities/shoppingCart';

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

order.checkout();
