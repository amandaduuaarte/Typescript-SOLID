/**
 * Single-Responsibility Principle:
 * A class should have one and only one reason to change, meaning that a
 * class should have only one job.
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
