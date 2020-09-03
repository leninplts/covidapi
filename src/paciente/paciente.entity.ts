import { Entity, Column, ObjectIdColumn, BaseEntity } from 'typeorm';

@Entity('paciente')
export class PacienteEntity extends BaseEntity {
  @ObjectIdColumn()
  _id: string;

  @Column('text')
  doctorid: string;

  @Column('text')
  userid: string;

  @Column('text')
  nombres: string;

  @Column('text')
  apellidos: string;

  // @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  // createdAt: Date

  // @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  // updatedAt: Date
}