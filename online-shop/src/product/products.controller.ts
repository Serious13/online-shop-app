import { Controller, Get, Param, Query, Body, Post } from '@nestjs/common';
import { ProductModule } from './products.module';
import { ProductService } from './product.service';
import { Product } from './product.entity';

@Controller('products')
export class ProductController {
    constructor(private readonly productService: ProductService) {}
    @Get('')
    async findAll(): Promise<Product[]> {
        console.log("findAll STARTED")
        return this.productService.findAll();
    }
    @Post('')
    async addComment(@Body() body: any): Promise<Product[]> {
        console.log("addComment FUNCTION")//, body.id, body.comment)
        return this.productService.addComment(body.id, body.comment)   
    }
    @Get(':name') 
    async findOne(@Param ('name') name): Promise<Product[]> {
        console.log("FindOne FUNCTION", name)
        return this.productService.findOne(name);        
    }
}