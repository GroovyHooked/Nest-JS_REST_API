import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Scooter } from './scooter.entity';
import { ScootersController } from './scooters.controller';
import { ScootersService } from './scooters.service';

@Module({
  imports: [TypeOrmModule.forFeature([Scooter])],
  controllers: [ScootersController],
  providers: [ScootersService]
})
export class ScootersModule {}
