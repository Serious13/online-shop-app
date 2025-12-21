import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ProductService } from './product/product.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly productService: ProductService ) {}
  @Get('')
  getHello(): any {
    return this.appService.getHello();
  }
  getProducts(): any {
    return this.productService.findAll();
  }
}
