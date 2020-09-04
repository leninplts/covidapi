import { Test, TestingModule } from '@nestjs/testing';
import { ConsultaResolver } from './consulta.resolver';

describe('ConsultaResolver', () => {
  let resolver: ConsultaResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConsultaResolver],
    }).compile();

    resolver = module.get<ConsultaResolver>(ConsultaResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
