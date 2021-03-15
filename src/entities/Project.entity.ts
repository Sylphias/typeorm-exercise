import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import {Team} from './Team.entity'

// A project should be assigned to a team
@Entity()
export class Project {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    projectName: string;

    @ManyToOne(() => Team, (team: Team) => team.projects,{ nullable: false })
    team!:Team;
}