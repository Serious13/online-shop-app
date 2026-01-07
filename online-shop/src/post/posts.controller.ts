import { Controller, Get, Param, Query, Body, Post } from '@nestjs/common';
import { PostService } from './post.service';
import { Comment } from './post.entity';

@Controller('comments')
export class PostController {
    constructor(private readonly postService: PostService) {}
    @Get()
    async findAll(): Promise<any> {
        console.log("findAll STARTED")
        return this.postService.findAllPosts();
    }
    //id : string commentBody: string, score: number)
    /*@Post('/addComment') 
    async addComment(@Body() body): Promise<any> {
        console.log("addComment FUNCTION", body)
        return this.postService.addComment(body.message, body.rating);        
    }*/   
}