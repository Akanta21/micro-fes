import { Controller, Request, Post, Sse, Body } from '@nestjs/common';

import { EventsService } from '../../event/event.service';

interface Status {
  ok: boolean;
}

@Controller('stock')
export class StockController {
  constructor(private readonly eventsService: EventsService) {}

  @Sse()
  events(@Request() req) {
    return this.eventsService.subscribe('payment');
  }

  @Post('payment-status')
  async payment(
    @Request() req,
    @Body() { status }: { status: string },
  ): Promise<Status> {
    this.eventsService.emit('payment', {
      status,
      paid_date: new Date().toISOString(),
    });
    return { ok: true };
  }
}
