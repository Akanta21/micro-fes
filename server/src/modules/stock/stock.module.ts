import { Module } from '@nestjs/common';

import { EventsService } from '../../event/event.service';
import { StockController } from './stock.controller';

@Module({
  providers: [EventsService],
  controllers: [StockController],
})
export class StockModule {}
