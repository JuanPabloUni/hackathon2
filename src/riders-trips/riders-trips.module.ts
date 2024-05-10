import { Module } from '@nestjs/common';
import { RidersTripsController } from './riders-trips.controller';

@Module({
  controllers: [RidersTripsController]
})
export class RidersTripsModule {}
