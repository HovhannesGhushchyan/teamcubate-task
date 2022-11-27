import {
  Controller,
  Get,
  UseGuards,
  Request,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { AuthGuard } from '../auth/guards/auth.guard';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Controller('users')
@UseInterceptors(ClassSerializerInterceptor)
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get('/certificates')
  @UseGuards(AuthGuard)
  async getUserCertificates(@Request() req): Promise<User> {
    return await this.userService.getUserCertificate(req.user.id);
  }
}
