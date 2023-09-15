import { Injectable } from '@nestjs/common';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';
import { PrismaService as Repository } from 'src/prisma/prisma.service';
@Injectable()
export class PlanService {
  constructor(private readonly repository: Repository) {}

  create(createPlanDto: CreatePlanDto) {
    return this.repository.plan.create({ data: { ...createPlanDto } });
  }

  async findAll() {
    return await this.repository.plan.findMany();
  }

  async findOne(id: number) {
    return await this.repository.plan.findFirst({ where: { id: +id } });
  }

  async update(id: number, updatePlanDto: UpdatePlanDto) {
    return await this.repository.plan.update({
      where: { id: +id },
      data: updatePlanDto,
    });
  }

  async remove(id: number) {
    return (await this.repository.plan.delete({ where: { id: +id } }))
      ? true
      : false;
  }
}
