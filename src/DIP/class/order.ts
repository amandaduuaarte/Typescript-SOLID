/**
 * Nenhuma dependencia concreta.
 */
import { OrderStatus } from './Interfaces/OrderStatus';
import { CustomerOrder } from './Interfaces/customer-protocol';
import { ShoppingCartProtocol } from './Interfaces/shopping-cart-protocol';
import { MensagingProtocol } from './Interfaces/messaging-protocol';
import { PersistencyProtocol } from './Interfaces/persistency-protocol';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    /**
     * A classe order depende de várias outras coisas.
     * Elas estao acopladas('So andam juntas')
     */

    /**
     * Interfaces e types sao também abstracoes
     */
    private readonly cart: ShoppingCartProtocol,
    private readonly message: MensagingProtocol,
    private readonly persistancy: PersistencyProtocol,
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
