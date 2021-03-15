import {User} from '../entities/User.entity'
import Faker from 'faker';
import { define } from 'typeorm-seeding';

define(User, (faker: typeof Faker) => {
    const age = faker.random.number(100)
    const firstName = faker.name.firstName()
    const lastName = faker.name.lastName()
    const user = new User()
    user.firstName = firstName
    user.lastName = lastName
    user.age = age
    return user
  })