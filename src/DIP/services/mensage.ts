import { MensagingProtocol } from '../class/Interfaces/messaging-protocol';
export class Mensaging implements MensagingProtocol {
  sendMessage(message: string): void {
    console.log('Mensagem enviada', message);
  }
}
