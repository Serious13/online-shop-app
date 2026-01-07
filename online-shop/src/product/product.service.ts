
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { Product } from './product.entity.js';
import { DataSource } from 'typeorm';
import { ObjectId } from 'mongodb';
import { Comment } from '../post/post.entity.js';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: MongoRepository<Product>,
    //@InjectRepository(Post)
    //private postRepository: MongoRepository<Post>
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

  async getRating(id : string) {
     try {
      console.log("Found following products:", this.productRepository.find())
      return this.productRepository.find()
    }
    catch(e) {
      console.log("e", e)
      return e
    }    
  }
  async findProductByName(name: string): Promise<any> {
    try {
      console.log("RES", await this.productRepository.findBy({
        name: name
      })
    )
      return this.productRepository.find({
        where: { name: name }
      })
    }
    catch(e) {
      console.log("e", e)
      return e
    }
  }

  async findProductById(id: string): Promise<Product | null> {
    try {
      console.log("RES", await this.productRepository.findOneBy({
          _id: new ObjectId(id),
        })
      )
      return  this.productRepository.findOneBy({
        _id: new ObjectId(id),
      })      
    }
    catch(e) {
      console.log("e", e)
      return e
    }
  }

  async addComment(id : string, productName : string, commentBody: string, score: number): Promise<any> {
    try {  
      const comment = new Comment(productName, commentBody, score)
      console.log("comment", id, comment)
      return this.productRepository.findOneAndUpdate(
          { _id: new ObjectId(id) }, 
          {
             $push: {
                posts: comment,
              },
       
          },
          {
            returnDocument: 'after', 
          }
      )
    }
    catch(e) {
      console.log("e", e)
      return e
    }
  }

  async getRatingByProductId(id: string) : Promise<number> {
    try {
      let rating : number = 0
      let posts : Comment[] = []
      let avgRating : number = 1
      let product  = await this.findProductById(id)
      posts = product ? product.posts : []
      console.log("product", posts)
      for (let comment of posts) {
        rating += comment.score 
      }
      if (posts.length > 0) {
        avgRating = rating / posts.length
      }
      return avgRating
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
