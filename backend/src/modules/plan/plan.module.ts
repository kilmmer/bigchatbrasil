import { Module } from '@nestjs/common';
import { PlanService } from './plan.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [PlanService],
  imports: [PrismaModule],
})
export class PlanModule {}
