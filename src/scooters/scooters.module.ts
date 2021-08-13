import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Repair } from 'src/repairs/repair.entity';
import { Scooter } from './scooter.entity';
import { ScootersController } from './scooters.controller';
import { ScootersService } from './scooters.service';

@Module({
  imports: [TypeOrmModule.forFeature([Scooter, Repair])],
  controllers: [ScootersController],
  providers: [ScootersService]
})
export class ScootersModule {}
