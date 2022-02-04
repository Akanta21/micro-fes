import { Module } from '@nestjs/common';

import { EventsService } from '../../event/event.service';
import { ProductsController } from './products.controller';
import { ProductsSseController } from './products-sse.controller';

@Module({
  providers: [EventsService],
  controllers: [ProductsController, ProductsSseController],
})
export class ProductsModule {}
