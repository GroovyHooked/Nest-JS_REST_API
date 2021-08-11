import { Module } from '@nestjs/common';
import { ScootersModule } from './scooters/scooters.module';
import { RepairsModule } from './repairs/repairs.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ScootersModule, 
    RepairsModule]
})
export class AppModule {}
