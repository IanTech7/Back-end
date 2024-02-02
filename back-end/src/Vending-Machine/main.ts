import { NestFactory } from '@nestjs/core';
import { VendingMachineModule } from './vending-machine.module';

async function bootstrap() {
  const app = await NestFactory.create(VendingMachineModule);
  await app.listen(3000);
}
bootstrap();
