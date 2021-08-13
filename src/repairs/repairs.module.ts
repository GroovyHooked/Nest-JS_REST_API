import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Scooter } from 'src/scooters/scooter.entity';
import { Repair } from './repair.entity';
import { RepairsController } from './repairs.controller';
import { RepairsService } from './repairs.service';

@Module({
  imports: [TypeOrmModule.forFeature([Repair, Scooter])],
  controllers: [RepairsController],
  providers: [RepairsService]
})
export class RepairsModule {}
