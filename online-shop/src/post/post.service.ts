
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { Post } from './post.entity.js';
import { DataSource } from 'typeorm';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private productRepository: MongoRepository<Post> //,private dataSource: DataSource
  ) {} 

 

  /*async findAll(): Promise<Post[]> {
    try {
      console.log("Found following products:", this.productRepository.find())
      return this.productRepository.find()
    }
    catch(e) {
      console.log("e", e)
      return e
    }    
  }*/

  /*async findOne(name: string): Promise<Product[]> {
    try {
       return this.productRepository.find({
        where: {
          name: { $eq: name }
        }
      })
    }
    catch(e) {
      console.log("e", e)
      return e
    }   
  }*/

  async remove(id: number): Promise<void> {
    try {
       await this.productRepository.delete(id)
    }
    catch(e) {
      console.log("e", e)
      return e
    }   
  }
}
