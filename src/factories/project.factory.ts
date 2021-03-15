import {Project} from '../entities/Project.entity'
import Faker from 'faker';
import { define } from 'typeorm-seeding';

define(Project, (faker: typeof Faker) => {
    const projectName = faker.company.companyName()
    const project = new Project()
    project.projectName = projectName
    return project
})