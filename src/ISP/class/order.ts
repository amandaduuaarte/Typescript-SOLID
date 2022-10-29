import { OrderStatus } from './Interfaces/OrderStatus';
import { Mensaging } from '../services/mensage';
import { Persistency } from '../services/persistancy';
import { ShoppingCart } from './shoppingCart';
import { CustomerOrder } from './Interfaces/Customer-protocol';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCart,
    private readonly message: Mensaging,
    private readonly persistancy: Persistency,
    private readonly customer: CustomerOrder,
  ) {}

  get orderStatus(): Readonly<OrderStatus> {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Carrinho vazio');

      return;
    }

    this._orderStatus = 'closed';
    this.message.sendMessage(
      `Seu pedido com total : ${this.cart.totalWithDiscount()} foi recebido`,
    );
    this._orderStatus = 'closed';
    this.persistancy.saveOrder();
    this.cart.clear();
    console.log(
      'O cliente é:',
      this.customer.getName(),
      this.customer.getIDN(),
    );
  }
}

/**
 * Uma clase pode ser considerada coesa quando ela usa seus atributos dentro dos
seus metodos
 *  */
