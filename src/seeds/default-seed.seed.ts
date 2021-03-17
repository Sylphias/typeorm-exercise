import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import {User} from '../entities/User.entity';
import {Team} from '../entities/Team.entity';
import {Project} from '../entities/Project.entity';

export default class CreateDefaultSeed implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
    // Create unlinked entities
    let users = await factory(User)().createMany(3)
    let teams = await factory(Team)().createMany(3)
    let projects = await factory(Project)().map(async(project:Project)=>{
        project.team = teams[Math.floor(Math.random() * 3)]
        return project
    }).createMany(3)

    }
  }