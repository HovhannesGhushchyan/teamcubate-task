import { Seeder } from 'typeorm-seeding';
import { User } from '../../users/entities/user.entity';
import * as bcrypt from 'bcrypt';

export default class UserSeed implements Seeder {
  public async run(): Promise<any> {
    const salt = bcrypt.genSaltSync(10);

    const userFirst = new User();
    userFirst.email = 'userFirst@test.com';
    userFirst.password = bcrypt.hashSync('111', salt);
    userFirst.salt = salt;
    await userFirst.save();

    const userTwo = new User();
    userTwo.email = 'userTwo@test.com';
    userTwo.password = bcrypt.hashSync('111', salt);
    userTwo.salt = salt;
    await userTwo.save();

    const userThree = new User();
    userThree.email = 'userThree@test.com';
    userThree.password = bcrypt.hashSync('111', salt);
    userThree.salt = salt;
    await userThree.save();

    const userFour = new User();
    userFour.email = 'userFour@test.com';
    userFour.password = bcrypt.hashSync('111', salt);
    userFour.salt = salt;
    await userFour.save();

    const userFive = new User();
    userFive.email = 'userFive@test.com';
    userFive.password = bcrypt.hashSync('111', salt);
    userFive.salt = salt;
    await userFive.save();

    const userSix = new User();
    userSix.email = 'userSix@test.com';
    userSix.password = bcrypt.hashSync('111', salt);
    userSix.salt = salt;
    await userSix.save();

    const userSeven = new User();
    userSeven.email = 'userSeven@test.com';
    userSeven.password = bcrypt.hashSync('111', salt);
    userSeven.salt = salt;
    await userSeven.save();

    const userEight = new User();
    userEight.email = 'userEight@test.com';
    userEight.password = bcrypt.hashSync('111', salt);
    userEight.salt = salt;
    await userEight.save();

    const userNine = new User();
    userNine.email = 'userNine@test.com';
    userNine.password = bcrypt.hashSync('111', salt);
    userNine.salt = salt;
    await userNine.save();

    const userTen = new User();
    userTen.email = 'userTen@test.com';
    userTen.password = bcrypt.hashSync('111', salt);
    userTen.salt = salt;
    await userTen.save();
  }
}
