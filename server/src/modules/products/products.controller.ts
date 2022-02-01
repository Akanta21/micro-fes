import { Controller, Get, Param } from '@nestjs/common';
import products, { Product } from 'src/products';

@Controller('products')
export class ProductsController {
  @Get()
  async index(): Promise<Product[]> {
    console.log('i am here');
    return products;
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Product> {
    return products.find((product) => product.id === parseInt(id));
  }
}
