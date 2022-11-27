import { Seeder } from 'typeorm-seeding';
import { Carbon, CarbonStatus } from '../../carbon/entities/carbon.entity';

export default class UserCarbonSeed implements Seeder {
  public async run(): Promise<any> {
    const carbonFirst = new Carbon();
    carbonFirst.country = 'Dominican Republic';
    carbonFirst.status = CarbonStatus.owned;
    carbonFirst.owner = 1;
    await carbonFirst.save();

    const carbonSecond = new Carbon();
    carbonSecond.country = 'Dominican Republic';
    carbonSecond.status = CarbonStatus.owned;
    carbonSecond.owner = 2;
    await carbonSecond.save();

    const carbonThree = new Carbon();
    carbonThree.country = 'Dominican Republic';
    carbonThree.status = CarbonStatus.owned;
    carbonThree.owner = 3;
    await carbonThree.save();

    const carbonFour = new Carbon();
    carbonFour.country = 'Dominican Republic';
    carbonFour.status = CarbonStatus.owned;
    carbonFour.owner = 4;
    await carbonFour.save();

    const carbonFive = new Carbon();
    carbonFive.country = 'Dominican Republic';
    carbonFive.status = CarbonStatus.owned;
    carbonFive.owner = 5;
    await carbonFive.save();

    const carbonSix = new Carbon();
    carbonSix.country = 'Dominican Republic';
    carbonSix.status = CarbonStatus.transferred;
    carbonSix.owner = 6;
    await carbonSix.save();

    const carbonSeven = new Carbon();
    carbonSeven.country = 'Dominican Republic';
    carbonSeven.status = CarbonStatus.transferred;
    carbonSeven.owner = 7;
    await carbonSeven.save();

    const carbonEight = new Carbon();
    carbonEight.country = 'Dominican Republic';
    carbonEight.status = CarbonStatus.transferred;
    carbonEight.owner = 8;
    await carbonEight.save();

    const carbonNine = new Carbon();
    carbonNine.country = 'Dominican Republic';
    carbonNine.status = CarbonStatus.transferred;
    carbonNine.owner = 9;
    await carbonNine.save();

    const carbonTen = new Carbon();
    carbonTen.country = 'Dominican Republic';
    carbonTen.status = CarbonStatus.transferred;
    carbonTen.owner = 10;
    await carbonTen.save();

    const carbonEleven = new Carbon();
    carbonEleven.country = 'Dominican Republic';
    carbonEleven.status = CarbonStatus.available;
    await carbonEleven.save();

    const carbonTwelve = new Carbon();
    carbonTwelve.country = 'Dominican Republic';
    carbonTwelve.status = CarbonStatus.available;
    await carbonTwelve.save();

    const carbonThirteen = new Carbon();
    carbonThirteen.country = 'Dominican Republic';
    carbonThirteen.status = CarbonStatus.available;
    await carbonThirteen.save();

    const carbonFiveteen = new Carbon();
    carbonFiveteen.country = 'Dominican Republic';
    carbonFiveteen.status = CarbonStatus.available;
    await carbonFiveteen.save();

    const sevenTeen = new Carbon();
    sevenTeen.country = 'Dominican Republic';
    sevenTeen.status = CarbonStatus.available;
    await sevenTeen.save();

    const eightTeen = new Carbon();
    eightTeen.country = 'Dominican Republic';
    eightTeen.status = CarbonStatus.available;
    await eightTeen.save();

    const ninghteen = new Carbon();
    ninghteen.country = 'Dominican Republic';
    ninghteen.status = CarbonStatus.available;
    await ninghteen.save();

    const twoelve = new Carbon();
    twoelve.country = 'Dominican Republic';
    twoelve.status = CarbonStatus.available;
    await twoelve.save();
  }
}
