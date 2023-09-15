import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { Customer } from 'src/modules/customer/entities/customer.entity';
import { Plan } from 'src/modules/plan/entities/plan.entity';

export class CreateWalletDto {
  @ApiProperty()
  @IsNumber()
  @IsOptional()
  id?: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  customerId: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  balance: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  limit: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  planId: number;
}
