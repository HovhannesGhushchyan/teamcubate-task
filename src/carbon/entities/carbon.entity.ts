import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn, BaseEntity
} from "typeorm";
import { User } from '../../users/entities/user.entity';

export enum CarbonStatus {
  available = 'available',
  owned = 'owned',
  transferred = 'transferred',
}

@Entity({ name: 'carbon' })
export class Carbon extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  country: string;

  @Column({ type: 'enum', enum: CarbonStatus })
  status: CarbonStatus;

  @ManyToOne(() => User)
  @JoinColumn({
    name: 'owner',
    referencedColumnName: 'id',
  })
  owner?: number;
}
