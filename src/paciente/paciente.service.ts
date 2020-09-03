import { Injectable } from '@nestjs/common';
import { PacienteEntity } from './paciente.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { DoctorService } from '../doctor/doctor.service';
import { UserService } from '../user/user.service';
import { PacienteInput } from './paciente.input';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class PacienteService {
    constructor(
        private readonly doctorService: DoctorService,
        private readonly userService: UserService,
        @InjectRepository(PacienteEntity)
        private readonly pacienteService: Repository<PacienteEntity>,
    ) { }

    async findAll(): Promise<PacienteEntity[]> {
        return await this.pacienteService.find();
    }

    async create(input: PacienteInput): Promise<PacienteEntity> {
        const paciente = new PacienteEntity();

        const user = await this.userService.getUserById(input.userid);

        paciente._id = uuidv4();
        paciente.doctorid = input.doctorid
        paciente.userid = input.userid
        paciente.nombres = user.nombres;
        paciente.apellidos = user.apellidos;

        // return paciente;
        return this.pacienteService.save(paciente);
    }

}
