import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { VendingMachineModule } from '../src/vending-machine/vending-machine.module';

describe('VendingMachineController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [VendingMachineModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/produtos (GET)', () => {
    return request(app.getHttpServer())
      .get('/produtos')
      .expect(200)
      .expect((response) => {
        
      });
  });

  
});
