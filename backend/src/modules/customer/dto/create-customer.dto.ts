import {
  IsString,
  IsEmail,
  IsNotEmpty,
  MinLength,
  MaxLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger/dist';

export class CreateCustomerDto {
  @ApiProperty() @IsString() @IsNotEmpty() name: string;
  @ApiProperty() @IsEmail() @IsNotEmpty() email: string;
  @ApiProperty() @IsString() @IsNotEmpty() telephone: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MinLength(11, { message: 'O CPF está incompleto' })
  @MaxLength(11, { message: 'Informe o CPF corretamente' })
  cpf: string;

  @ApiProperty() @IsString() @IsNotEmpty() responsible: string;
  @IsString()
  @IsNotEmpty()
  @MinLength(14, { message: 'O CNPJ está incompleto' })
  @MaxLength(14, { message: 'Informe o CNPJ corretamente' })
  cnpj: string;

  @ApiProperty() @IsString() @IsNotEmpty() business_name: string;

  @ApiProperty() @IsString() plan?: string;
}
