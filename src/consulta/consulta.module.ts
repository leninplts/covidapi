import { Module } from '@nestjs/common';
import { ConsultaService } from './consulta.service';
import { ConsultaResolver } from './consulta.resolver';

@Module({
  providers: [ConsultaService, ConsultaResolver]
})
export class ConsultaModule {}
