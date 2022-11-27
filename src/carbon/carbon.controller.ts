import {
  Controller,
  Get,
  UseGuards,
  UseInterceptors,
  ClassSerializerInterceptor,
  Post,
  Body,
  Request,
} from '@nestjs/common';
import { AuthGuard } from '../auth/guards/auth.guard';
import { CarbonService } from './carbon.service';
import { Carbon } from './entities/carbon.entity';
import { TransferCarbonDto } from './dto/transfer-carbon.dto';
import { TransferCarbonResultInterface } from './interfaces/transfer-carbon-result.interface';

@Controller('carbon')
@UseInterceptors(ClassSerializerInterceptor)
export class CarbonController {
  constructor(private carbonService: CarbonService) {}

  @Get()
  @UseGuards(AuthGuard)
  async getAllAvailableCarbons(): Promise<Carbon[]> {
    return await this.carbonService.findByAvailable();
  }

  @Post()
  @UseGuards(AuthGuard)
  async transferCarbons(
    @Body() transferCarbonDto: TransferCarbonDto,
    @Request() req,
  ): Promise<TransferCarbonResultInterface> {
    const owner = req.user.id;
    return await this.carbonService.transferCarbon({
      id: transferCarbonDto.id,
      owner,
    });
  }
}
