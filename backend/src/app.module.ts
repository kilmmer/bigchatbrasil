import { Module } from '@nestjs/common';
import { CustomerModule } from './modules/customer/customer.module';
import { MessageModule } from './modules/message/message.module';
import { CustomerService } from './modules/customer/customer.service';
import { ConfigModule } from '@nestjs/config';
import { CustomerController } from './modules/customer/customer.controller';

import { PrismaModule } from './prisma/prisma.module';
import { WalletModule } from './modules/wallet/wallet.module';
import { WalletService } from './modules/wallet/wallet.service';
import { PlanModule } from './modules/plan/plan.module';

@Module({
  imports: [
    CustomerModule,
    MessageModule,
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    WalletModule,
    PlanModule,
  ],
  controllers: [CustomerController],
  providers: [CustomerService, WalletService],
})
export class AppModule {}
