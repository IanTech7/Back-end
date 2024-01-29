import { Injectable, NotFoundException } from '@nestjs/common';
import { ProdutoDto } from './produto.dto';

@Injectable()
export class VendingMachineService {
  getProdutos() {
      throw new Error('Method not implemented.');
  }
  getProduto(idProduto: number) {
      throw new Error('Method not implemented.');
  }
  private produtos: ProdutoDto[] = [
    { id: 1, nome: 'Refrigerante', preco: 2.5, quantidade: 10 },
    { id: 2, nome: 'Salgadinho', preco: 1.8, quantidade: 15 },
    { id: 3, nome: 'Chocolate', preco: 2.0, quantidade: 12 },
    { id: 4, nome: 'Água Mineral', preco: 1.0, quantidade: 20 },
    { id: 5, nome: 'Energético', preco: 5.0, quantidade: 5 },
  ];

  getProdutoPorNome(nome: string) {
    const produto = this.produtos.find((p) => p.nome.toLowerCase() === nome.toLowerCase());
    if (!produto) {
      throw new NotFoundException('Produto não encontrado');
    }
    return produto;
  }

  criarProduto(novoProduto: ProdutoDto) {
    if (!novoProduto.nome || !novoProduto.preco || !novoProduto.quantidade) {
      throw new Error('Todos os campos são obrigatórios');
    }
    novoProduto.id = this.produtos.length + 1;
    this.produtos.push(novoProduto);
    return { mensagem: 'Produto adicionado com sucesso', produto: novoProduto };
  }

  atualizarProduto(id: number, produtoAtualizado: ProdutoDto) {
    const index = this.produtos.findIndex((p) => p.id === id);
    if (index === -1) {
      throw new NotFoundException('Produto não encontrado');
    }

    if (!produtoAtualizado.nome && !produtoAtualizado.preco && !produtoAtualizado.quantidade) {
      throw new Error('Pelo menos um campo deve ser fornecido para atualização');
    }

    if (produtoAtualizado.nome) {
      this.produtos[index].nome = produtoAtualizado.nome;
    }

    if (produtoAtualizado.preco) {
      this.produtos[index].preco = produtoAtualizado.preco;
    }

    if (produtoAtualizado.quantidade) {
      this.produtos[index].quantidade = produtoAtualizado.quantidade;
    }

    return { mensagem: 'Produto atualizado com sucesso', produto: produtoAtualizado };
  }

  excluirProduto(id: number) {
    const index = this.produtos.findIndex((p) => p.id === id);
    if (index === -1) {
      throw new NotFoundException('Produto não encontrado');
    }

    this.produtos.splice(index, 1);
    return { mensagem: 'Produto excluído com sucesso' };
  }
}