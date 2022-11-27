import { Injectable } from '@nestjs/common';
import { Carbon, CarbonStatus } from './entities/carbon.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CarbonRepository } from './carbon.repository';
import { TransferCarbonDto } from './dto/transfer-carbon.dto';
import { TransferCarbonInterface } from './interfaces/transfer-carbon.interface';
import { TransferCarbonResultInterface } from './interfaces/transfer-carbon-result.interface';

@Injectable()
export class CarbonService {
  constructor(
    @InjectRepository(CarbonRepository)
    private carbonRepository: CarbonRepository,
  ) {}

  async findByAvailable(): Promise<Carbon[]> {
    return await this.carbonRepository.find({
      where: { status: CarbonStatus.available },
    });
  }

  async transferCarbon(
    transferCarbonInterface: TransferCarbonInterface,
  ): Promise<TransferCarbonResultInterface> {
    const { id, owner } = transferCarbonInterface;
    return (await this.carbonRepository.update(
      {
        id,
      },
      {
        status: CarbonStatus.transferred,
        owner,
      },
    )) as unknown as TransferCarbonResultInterface;
  }
}
