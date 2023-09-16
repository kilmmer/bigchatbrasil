import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { ApiTags } from '@nestjs/swagger';
import { WalletService } from '../wallet/wallet.service';

@Controller('customer')
@ApiTags('customer')
export class CustomerController {
  constructor(
    private readonly customerService: CustomerService,
    private readonly walletService: WalletService,
  ) {}

  @Post('')
  async create(@Body() createCustomerDto: CreateCustomerDto) {
    const plan = createCustomerDto['plan'];
    delete createCustomerDto['plan'];

    const newCustomer = await this.customerService.create(createCustomerDto);

    await this.walletService.create({
      balance: 0,
      customerId: newCustomer.id,
      limit: 0,
      planId: +plan,
    });

    return newCustomer;
  }

  @Get()
  findAll() {
    return this.customerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCustomerDto: UpdateCustomerDto,
  ) {
    return this.customerService.update(+id, updateCustomerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customerService.remove(+id);
  }

  @Post('/:id/add-balance')
  addBalance(@Param('id') customerId: number, @Body() body: { value: number }) {
    return this.walletService.addBalance(+customerId, body.value);
  }

  @Put('/:id/change-credit-limit')
  async changeCreditLimit(
    @Param('id') customerId,
    @Body() body: { limit: number },
  ) {
    return await this.walletService.changeCustomerLimit(
      +customerId,
      body.limit,
    );
  }

  @Put('/:id/change-plan')
  changePlan(@Param('id') customerId, @Body() body: { plan: number }) {
    return {
      plan: this.walletService.changeCustomerPlan(+customerId, body.plan),
    };
  }

  @Get('/:id/get-balance')
  async getBalance(@Param('id') customerId) {
    return await this.walletService.getBalance(+customerId);
  }

  @Get('/:id/get-wallet')
  async getWallet(@Param('id') customerId) {
    const wallet = await this.walletService.getWallet(+customerId);

    if (!wallet) {
      throw new HttpException(
        'O cliente não tem carteira cadastrada.',
        HttpStatus.BAD_REQUEST,
      );
    }

    return wallet;
  }
}
