
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { Product } from './product.entity.js';
import { Post } from '../post/post.entity.js';
import { DataSource } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: MongoRepository<Product>,
    @InjectRepository(Post)
    private postRepository: MongoRepository<Post>
   
  ) {} 

  /*async onModuleInit() {
    try {
      console.log("onModuleInit STARTED")
      await this.productRepository.createCollectionIndex({
        name: 'text',
        shortDescription: 'text',
        longDescription: 'text'
      });
    }
    catch(e) {
      console.log("e", e)
      return e
    }    
  }*/

  async findAll(): Promise<Product[]> {
    try {
      console.log("Found following products:", this.productRepository.find())
      return this.productRepository.find()
    }
    catch(e) {
      console.log("e", e)
      return e
    }    
  }

  async findOne(name: string): Promise<Product[]> {
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
  }

  async addComment(productName : string, commentBody: string): Promise<any> {
    try {
      //productId: string, userId: string, comment: string
      const comment = new Post(productName, commentBody )
      console.log("comment", comment)
      return this.productRepository.findOneAndUpdate(
          { name : productName }, //"693f508607f3dceda72aa039"
          {
             $push: {
                posts: comment,
              },
            //$set: { "posts.$[element]" : comment },
          },
          {
            returnDocument: 'after', // return updated document
          },
      )
    }
    catch(e) {
      console.log("e", e)
      return e
    }
  }

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
