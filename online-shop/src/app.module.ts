import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product/product.entity';
import { Post } from './post/post.entity';
import { ProductController } from './product/products.controller';
import { ProductService } from './product/product.service';
import { ProductModule } from './product/products.module';
import { PostModule } from './post/posts.module';
import { DataSource } from "typeorm"
import { ConfigModule } from '@nestjs/config';

const host = process.env.HOST
console.log("host", host)
@Module({
  imports: [
      ConfigModule.forRoot({ isGlobal: true,  envFilePath: ".env" }),
      TypeOrmModule.forRoot({
        type: 'mongodb',
        url: process.env.HOST,
        database: 'agital',
        entities: [Product, Post],
        synchronize: true
      }), 
      ProductModule, 
      PostModule
  ],
  controllers :[],
  providers: [],
  exports: []
})
export class AppModule {}