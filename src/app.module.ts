import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScootersModule } from './scooters/scooters.module';
import { RepairsModule } from './repairs/repairs.module';

@Module({
  imports: [ScootersModule, RepairsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
