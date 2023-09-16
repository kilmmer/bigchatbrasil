import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import { PrismaService as Repository } from 'src/prisma/prisma.service';

@Injectable()
export class WalletService {
  constructor(private repository: Repository) {}

  create(createWalletDto: CreateWalletDto) {
    return this.repository.wallet.create({
      data: {
        balance: createWalletDto.balance,
        customerId: createWalletDto.customerId,
        limit: createWalletDto.limit,
        planId: createWalletDto.planId,
      },
    });
  }

  async findOne(_id: number) {
    return await this.repository.wallet.findFirst({
      where: { id: +_id },
    });
  }

  async update(_customerId: number, updateWalletDto: UpdateWalletDto) {
    const wallet = await this.repository.wallet.findFirst({
      where: { customerId: +_customerId },
    });

    if (!wallet) {
      throw new HttpException(
        'Carteira do cliente não encontrada',
        HttpStatus.BAD_REQUEST,
      );
    }

    return await this.repository.wallet.update({
      where: { id: wallet.id },
      data: updateWalletDto,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} wallet`;
  }

  async addBalance(_customerId: number, value: number) {
    const wallet = await this.repository.wallet.findFirst({
      where: { customerId: +_customerId },
    });

    if (!wallet) {
      throw new HttpException(
        'Carteira do cliente não encontrada',
        HttpStatus.BAD_REQUEST,
      );
    }

    return await this.repository.wallet.update({
      where: { id: wallet.id },
      data: { balance: value },
    });
  }

  async changeCustomerLimit(_customerId: number, _limit: number) {
    const wallet = await this.repository.wallet.findFirst({
      where: { customerId: +_customerId },
    });

    if (!wallet) {
      throw new HttpException(
        'Carteira do cliente não encontrada',
        HttpStatus.BAD_REQUEST,
      );
    }

    return await this.repository.wallet.update({
      where: { id: wallet.id },
      data: { limit: _limit },
    });
  }

  async changeCustomerPlan(_customerId: number, _plan: number) {
    const wallet = await this.repository.wallet.findFirst({
      where: { customerId: +_customerId },
    });

    if (!wallet) {
      throw new HttpException(
        'Carteira do cliente não encontrada',
        HttpStatus.BAD_REQUEST,
      );
    }

    return await this.repository.wallet.update({
      where: { id: wallet.id },
      data: { planId: _plan },
    });
  }

  async getBalance(_customerId: number) {
    return await this.repository.wallet.findFirst({
      where: { customerId: +_customerId },
      select: { balance: true },
    });
  }

  async getWallet(_customerId: number) {
    return await this.repository.wallet.findFirst({
      where: { customerId: +_customerId },
    });
  }
}
