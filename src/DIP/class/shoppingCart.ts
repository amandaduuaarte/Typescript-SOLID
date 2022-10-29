/**
 *  Interface Segregation Principle:
 * Uma classe não deve ser forçada a implementar interfaces(types ou classes abstratas) e métodos
 * que não irão utilizar.
 * Esse princípio basicamente diz que é melhor criar interfaces mais específicas ao invés de
 * termos uma única interface genérica.
 */

import { Discount } from './discount';
import { CartItem } from './Interfaces/CartItem';

export class ShoppingCart {
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
