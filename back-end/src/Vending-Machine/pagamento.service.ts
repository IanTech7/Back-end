import { Injectable } from '@nestjs/common';

@Injectable()
export class PagamentoService {
  realizarPagamento(valor: number, metodo: string): string {
    if (metodo === 'pix' || metodo === 'cartao') {
      return `Pagamento de R$ ${valor.toFixed(2)} realizado com sucesso via ${metodo}`;
    } else {
      throw new Error('Método de pagamento inválido. Aceitamos apenas pix ou cartão.');
    }
  }
}
