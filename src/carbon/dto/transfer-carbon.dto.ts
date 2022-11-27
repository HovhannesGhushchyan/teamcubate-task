import { IsNotEmpty, IsNumber } from 'class-validator';

export class TransferCarbonDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;
}
