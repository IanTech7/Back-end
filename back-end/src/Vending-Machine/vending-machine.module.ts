import { Module } from '@nestjs/common';
import { VendingMachineController } from './vending-machine.controller';
import { VendingMachineService } from './vending-machine.service';

@Module({
  controllers: [VendingMachineController],
  providers: [VendingMachineService],
})
export class VendingMachineModule {}
