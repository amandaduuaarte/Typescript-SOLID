/**
 * Dessa forma quando for realizado os testes vai ocorrer de uma melhor forma e 
 * também nao vai aumentar a complexidade dos metodo, sabendo que nao vai 
 * haver varios caminhos pra seguir dentro de uma mesma classe.
 */
export abstract class Discount {
    protected discount = 0;
    
    calculate(price:number):number{
        return price - price * this.discount;
    }
}

export class FiftyPercentDiscount extends Discount {
    protected readonly discount = 0.5;
}

export class TenPercentDiscount extends Discount {
    protected readonly discount = 0.1;
}

export class NoDiscount extends Discount {}