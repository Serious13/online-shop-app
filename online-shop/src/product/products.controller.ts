import { Controller, Get, Param, Query, Body, Post } from '@nestjs/common';
import { ProductModule } from './products.module';
import { ProductService } from './product.service';
import { Product } from './product.entity';

@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductService) {}
    @Get('')
    async findAll(): Promise<Product[]> {
        console.log("findAll STARTED")
        return this.productService.findAll();
    }
    @Get(':name')
    async findProductByName(@Param ('name') name : string): Promise<any> {
        console.log("findProductByName")
        return this.productService.findProductByName(name);
    }
} 

@Controller('product') 
export class ProductController {  
    constructor(private readonly productService: ProductService) {}
    @Get('/rating')
    async getRatingByProductId(@Query ('id') id : string): Promise<number> {
        console.log("getRatingByProductId FUNCTION", id)
        return this.productService.getRatingByProductId(id)  
    }
    @Get(':id')
    async findProductById(@Param ('id') id : string): Promise<Product | null> {
        console.log("findProductById FUNCTION", id)
        return this.productService.findProductById(id)  
    }
   
    @Post(':id') 
    async addComment(@Param ('id') id : string, @Body() body: { name : string, message : string, rating : number}): Promise<Product> {
        console.log("addComment FUNCTION", id, body)
        return this.productService.addComment(id, body.name, body.message, body.rating);        
    }
}
