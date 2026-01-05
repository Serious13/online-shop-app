
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductService } from './product.service.js';
import { ProductsController, ProductController } from './products.controller.js';
import { Product } from './product.entity.js';
import { PostSchema } from '../post/post.schema';
import { ProductSchema } from './product.schema.js';

@Module({
  imports: [TypeOrmModule.forFeature([ProductSchema]), TypeOrmModule.forFeature([PostSchema])],
  providers: [ProductService],
  controllers: [ProductsController, ProductController],
  //exports: [TypeOrmModule]
})
export class ProductModule {}

