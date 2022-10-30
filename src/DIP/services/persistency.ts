import { PersistencyProtocol } from '../class/Interfaces/persistency-protocol';

export class Persistency implements PersistencyProtocol {
  saveOrder(): void {
    console.log('Pedido realizado');
  }
}
