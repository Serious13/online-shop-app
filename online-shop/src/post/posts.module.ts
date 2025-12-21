
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostController } from './posts.controller.js';
import { PostSchema } from './post.schema.js';
import { PostService } from './post.service';
import { Post } from './post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PostSchema])],
  providers: [PostService],
  controllers: [PostController],
  //exports: [TypeOrmModule]
})
export class PostModule {}

