import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { WalletModule } from '../wallet/wallet.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { WalletService } from '../wallet/wallet.service';

@Module({
  controllers: [CustomerController],
  exports: [CustomerService],
  imports: [PrismaModule, WalletModule],
  providers: [CustomerService, WalletService],
})
export class CustomerModule {}
