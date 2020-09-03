import { Module } from '@nestjs/common';
import { PacienteService } from './paciente.service';
import { PacienteResolver } from './paciente.resolver';
import { PacienteEntity } from './paciente.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../user/user.module';
import { DoctorModule } from '../doctor/doctor.module';
import { PacienteInput } from './paciente.input';

@Module({
  imports: [
    TypeOrmModule.forFeature([PacienteEntity]),
    UserModule,
    DoctorModule
  ],
  providers: [PacienteService, PacienteResolver],
  exports: [PacienteService]
})
export class PacienteModule { }
