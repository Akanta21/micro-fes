import { Controller, Sse, Request, Post, Body } from '@nestjs/common';
import products, { Product } from 'src/products';
import { EventsService } from '../../event/event.service';

interface Status {
  ok: boolean;
}

@Controller('products-sse')
export class ProductsSseController {
  constructor(private readonly eventsService: EventsService) {}

  @Sse('sse')
  events(@Request() req) {
    return this.eventsService.subscribe('products');
  }

  @Post('product-added')
  async payment(
    @Request() req,
    @Body() { product }: { product: Product },
  ): Promise<Status> {
    console.log('product', product);

    this.eventsService.emit('products', {
      product: [...products, product],
      paid_date: new Date().toISOString(),
    });
    return { ok: true };
  }
}
