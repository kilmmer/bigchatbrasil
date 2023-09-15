import { Module } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  exports: [WalletModule],
  providers: [WalletService],
  imports: [PrismaModule],
})
export class WalletModule {}
