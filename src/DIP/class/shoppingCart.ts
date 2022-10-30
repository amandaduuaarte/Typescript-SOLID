/**
 * DIP — Dependency Inversion Principle:
 * Princípio da Inversão de Dependência —
 * Dependa de abstrações e não de implementações.
 * obs: Quanto mais abstrato mais alto nivel tal coisa tem, ex:
 * interface que nao faz nada é considerada alto nivel
 */

/**
 * Classes de baixo nível: Sao classes que executam tarefas(os detalhes).
 * Classes de alto nível: Sao classes que gerenciam as de baixo nível.
 */

import { Discount } from './discount';
import { CartItem } from './Interfaces/CartItem';
import { ShoppingCartProtocol } from './Interfaces/shopping-cart-protocol';

export class ShoppingCart implements ShoppingCartProtocol {
  private readonly _items: CartItem[] = [];

  constructor(private readonly discount: Discount) {}

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
    /**
     * Remove one item with id specific
     */
  }

  get items(): Readonly<CartItem>[] {
    return this._items;
  }
  /**
   * Necessary for list all items
   */

  total(): number {
    return +this._items
      .reduce((total, item) => total + item.price, 0)
      .toFixed(2);
    /**
     * This + convert to number
     */
  }

  totalWithDiscount(): number {
    return this.discount.calculate(this.total());
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clear(): void {
    console.log('Carinho limpo');
    this._items.length = 0;
  }
}

/**
 * Is valid start your code with simple concepts and
 * after finishing add SOLID concepts
 */
