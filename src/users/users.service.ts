import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserRepository) private userRepo: UserRepository,
  ) {}

  getUserByEmail(email: string): Promise<User> {
    return this.userRepo.getUserByEmail(email);
  }

  async getUserCertificate(id: number): Promise<User> {
    // @ts-ignore
    return await this.userRepo.findOne(id, {
      relations: ['owners'],
    });
  }
}
