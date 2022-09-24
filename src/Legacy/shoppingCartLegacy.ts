/**
 * Single-Responsibility Principle:
 * A class should have one and only one reason to change, meaning that a
 * class should have only one job.
 */

type CartItem = {
  name: string;
  price: number;
};

type OrderStatus = 'open' | 'closed';

export class ShoppingCartLegacy {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'open';

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    /**
     * Remove one item with id specific
     */

    this._items.splice(index, 1);
  }

  /**
   * Necessary for list all items
   */
  get items(): Readonly<CartItem>[] {
    return this._items;
  }

  get orderStatus(): Readonly<OrderStatus> {
    return this._orderStatus;
  }

  total(): number {
    /**
     * This + convert to number
     */

    return +this._items
      .reduce((total, item) => total + item.price, 0)
      .toFixed(2);
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Carrinho vazio');

      return;
    }
    this._orderStatus = 'closed';
    this.sendMessage(`Seu pedido com total : ${this.total()} foi recebido`);
    this.savaOrder();
    this.clear();
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMessage(message: string): void {
    console.log('Mensagem enviada', message);
  }

  savaOrder(): void {
    console.log('Pedido realizado');
  }

  clear(): void {
    console.log('Carinho limpo');
    this._items.length = 0;
  }
}

const shoppingCart = new ShoppingCartLegacy();

shoppingCart.addItem({ name: 'Celular', price: 1200 });
shoppingCart.addItem({ name: 'Xbox', price: 4200 });
shoppingCart.addItem({ name: 'Notebook', price: 6000 });

shoppingCart.checkout();

/**
 * Is valid start your code with simple concepts and
 * after finishing add SOLID concepts
 */
