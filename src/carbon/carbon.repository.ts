import { EntityRepository, Repository } from 'typeorm';
import { Carbon } from './entities/carbon.entity';

@EntityRepository(Carbon)
export class CarbonRepository extends Repository<Carbon> {
  insertMany(carbon: Carbon): Promise<Carbon> {
    return this.save(carbon);
  }
}
