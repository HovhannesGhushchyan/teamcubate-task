import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Exclude } from 'class-transformer';
import { Carbon } from '../../carbon/entities/carbon.entity';

@Entity({ name: 'users' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @OneToMany(() => Carbon, (carbon) => carbon.owner)
  @JoinColumn([{ name: 'id', referencedColumnName: 'owner' }])
  owners?: Carbon;

  @Column()
  @Exclude()
  password: string;

  @Column()
  @Exclude()
  salt: string;

  async verifyPassword(password: string) {
    return await bcrypt.compare(password, this.password);
  }
}
