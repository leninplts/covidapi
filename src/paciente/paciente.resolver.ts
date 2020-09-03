import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PacienteService } from './paciente.service';
import { PacienteEntity } from './paciente.entity';
import { PacienteInput } from './paciente.input';

@Resolver('Paciente')
export class PacienteResolver {
    constructor(private readonly pacienteService: PacienteService) { }

    @Query(() => [PacienteEntity])
    async pacientes() {
        console.log('todos los pacientes');
        return this.pacienteService.findAll();
    }

    @Mutation(() => PacienteEntity)
    async createHorario(@Args('input') input: PacienteInput) {
        return await this.pacienteService.create(input);
        // return this.horarioService.createToken(user);
    }
}
