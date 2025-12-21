
import { Module } from '@nestjs/common';
import { ProductModule } from './products.module.js';
import { ProductService } from './product.service.js';
import { ProductController } from './products.controller.js';

@Module({
  imports: [ProductModule],
  providers: [ProductService],
  controllers: [ProductController]
})
export class UserHttpModule {}
