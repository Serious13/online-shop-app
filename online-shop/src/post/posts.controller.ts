import { Controller, Get, Param, Query } from '@nestjs/common';
import { PostService } from './post.service';
import { Post } from './post.entity';

@Controller('products')
export class PostController {
    constructor(private readonly postService: PostService) {}
    @Get()
    async findAll(): Promise<any> { //Promise<Post[]>
        console.log("findAll STARTED")
        //return this.postService.findAll();
    }
    @Get(':name') 
    async findOne(@Param ('name') name): Promise<any> { //Promise<Post[]>
        console.log("FindOne FUNCTION", name)
        //return this.postService.findOne(name);        
    }   
}