import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import {Team} from './Team.entity'
@Entity()
export class Project {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    projectName: string;

    @ManyToOne(() => Team, (team: Team) => team.projects)
    team!:Team;
}