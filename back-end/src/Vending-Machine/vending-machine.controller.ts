import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';
import { VendingMachineService } from './vending-machine.service';
import { ProdutoDto } from './produto.dto';
import { PagamentoService } from './pagamento.service';

@Controller('produtos')
export class VendingMachineController {
  constructor(
    private readonly vendingMachineService: VendingMachineService,
    private readonly pagamentoService: PagamentoService,
  ) {}

  @Get()
  getProdutos() {
    return this.vendingMachineService.getProdutos();
  }

  @Get(':idProduto')
  getProduto(@Param('idProduto') idProduto: number) {
    return this.vendingMachineService.getProduto(idProduto);
  }

  @Post()
  criarProduto(@Body() novoProduto: ProdutoDto) {
    return this.vendingMachineService.criarProduto(novoProduto);
  }

  @Put(':idProduto')
  atualizarProduto(@Param('idProduto') idProduto: number, @Body() produtoAtualizado: ProdutoDto) {
    return this.vendingMachineService.atualizarProduto(idProduto, produtoAtualizado);
  }

  @Delete(':idProduto')
  excluirProduto(@Param('idProduto') idProduto: number) {
    return this.vendingMachineService.excluirProduto(idProduto);
  }

  @Post(':idProduto/comprar')
  comprarProduto(@Param('idProduto') idProduto: number, @Body('metodoPagamento') metodoPagamento: string) {
    return this.vendingMachineService.comprarProduto(idProduto, metodoPagamento);
  }

  @Get('agua-mineral')
  getAguaMineral() {
    return this.vendingMachineService.getProdutoPorNome('Água Mineral');
  }

  @Get('chocolate')
  getChocolate() {
    return this.vendingMachineService.getProdutoPorNome('Chocolate');
  }

  @Get('energetico')
  getEnergetico() {
    return this.vendingMachineService.getProdutoPorNome('Energético');
  }
}
