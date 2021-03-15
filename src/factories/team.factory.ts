import {Team} from '../entities/Team.entity'
import Faker from 'faker';
import { define } from 'typeorm-seeding';

define(Team, (faker: typeof Faker) => {
    const teamName = faker.company.companyName()
    const team = new Team()
    team.teamName = teamName
    return team
  })