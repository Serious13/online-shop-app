
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { Comment } from './post.entity.js';
import { DataSource } from 'typeorm';
import { ObjectId } from 'mongodb';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Comment)
    private postRepository: MongoRepository<Comment>
  ) {}
  
  async findAllPosts(): Promise<Comment[]> {
    try {
      console.log("Found following products:", this.postRepository.find())
      return this.postRepository.find()
    }
    catch(e) {
      console.log("e", e)
      return e
    }    
  }
  
 /* async addComment(userName : string, commentBody: string, score: number): Promise<any> {
        try {
          //productId: string, userId: string, comment: string
          const comment = new Comment(userName, commentBody, score)
          console.log("comment", comment)

          return this.postRepository.save(
              comment 
          )
        }
        catch(e) {
          console.log("e", e)
          return e
        }
      } 
  */
 

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

  
}
