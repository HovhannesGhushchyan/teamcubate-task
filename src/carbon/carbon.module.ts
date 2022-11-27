import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { CarbonRepository } from './carbon.repository';
import { CarbonController } from './carbon.controller';
import { CarbonService } from './carbon.service';
import { UsersModule } from "../users/users.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([CarbonRepository]),
    forwardRef(() => UsersModule),
  ],
  controllers: [CarbonController],
  providers: [CarbonService],
  exports: [CarbonService],
})
export class CarbonModule {}
