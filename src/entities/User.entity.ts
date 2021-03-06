import {Entity, PrimaryGeneratedColumn, Column,ManyToMany, JoinTable} from "typeorm";
import {Team} from './Team.entity'
@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @ManyToMany(() => Team, (team: Team) => team.users)
    @JoinTable()
    teams!: Team[];

}
