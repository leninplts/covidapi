import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoctorModule } from './doctor/doctor.module';
import { HorarioModule } from './horario/horario.module';
import { UsertestModule } from './usertest/usertest.module';
import { PacienteModule } from './paciente/paciente.module';

@Module({
  imports: [
    UserModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      playground: true,
      context: ({ req }) => ({ headers: req.headers })
    }),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb+srv://leninplts:leninplts@mydb-xauik.mongodb.net/covidapi',
      entities: [join(__dirname, '**/**.entity{.ts,.js}')],
      synchronize: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      logging: true,
    }),
    DoctorModule,
    HorarioModule,
    UsertestModule,
    PacienteModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }