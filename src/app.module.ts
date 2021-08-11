import { Module } from '@nestjs/common';
import { ScootersModule } from './scooters/scooters.module';
import { RepairsModule } from './repairs/repairs.module';

@Module({
  imports: [ScootersModule, RepairsModule]
})
export class AppModule {}
