import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateCustomerDto, UpdateCustomerDto } from './dto';
import { PrismaService as Repository } from 'src/prisma/prisma.service';

@Injectable()
export class CustomerService {
  constructor(private readonly repository: Repository) {}

  /**
   * criação do customer no banco de dados
   * @param createCustomerDto
   * @returns
   */
  async create(_createCustomerDto: CreateCustomerDto) {
    try {
      const newCustomer = await this.repository.customer.create({
        data: { ..._createCustomerDto },
      });

      return newCustomer;
    } catch (error) {
      error;
      throw new HttpException(
        'Erro ao cadastrar novo cliente. ' + error,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  findAll() {
    return this.repository.customer.findMany();
  }

  findOne(_id: number) {
    return this.repository.customer.findFirst({ where: { id: _id } });
  }

  update(_id: number, _updateCustomerDto: UpdateCustomerDto) {
    return this.repository.customer.update({
      where: { id: _id },
      data: _updateCustomerDto,
    });
  }

  remove(_id: number) {
    return this.repository.customer.delete({ where: { id: _id } });
  }
}
