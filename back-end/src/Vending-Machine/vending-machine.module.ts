import { Module } from '@nestjs/common';
import { VendingMachineController } from './vending-machine.controller';
import { VendingMachineService } from './vending-machine.service';
import { PagamentoService } from './pagamento.service';

@Module({
  controllers: [VendingMachineController],
  providers: [VendingMachineService, PagamentoService],
})
export class VendingMachineModule {}
