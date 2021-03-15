import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany} from "typeorm";
import { Project } from "./Project.entity";
import {User} from "./User.entity"
@Entity()
export class Team {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    teamName: string;

    @ManyToMany(() => User, (user: User) => user.teams)
    users!: User[];

    @OneToMany(() => Project, (project: Project) => project.team)
    projects!: Project[];

}
