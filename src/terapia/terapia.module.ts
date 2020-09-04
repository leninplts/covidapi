import { Module } from '@nestjs/common';
import { TerapiaService } from './terapia.service';
import { TerapiaResolver } from './terapia.resolver';

@Module({
  providers: [TerapiaService, TerapiaResolver]
})
export class TerapiaModule {}
