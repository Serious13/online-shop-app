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
    async find(@Param ('name') name : string): Promise<any> {
        console.log("findAll STARTED")
        return this.productService.findProductByName(name);
    }
    
} 
//${basicUrl}/products/${productName}`
@Controller('product') 
export class ProductController {
    //`${basicUrl}/product/${id}`
    constructor(private readonly productService: ProductService) {}
    @Get(':id')
    async findProductById(@Param ('id') id : string): Promise<Product | null> {
        console.log("findProductById FUNCTION", id)
        return this.productService.findProductById(id)  
    }
    @Post(':id')
    async addComment(@Param ('id') id : string, @Body() body: any): Promise<Product[]> {
        console.log("addComment FUNCTION", body)//, body.id, body.comment)
        return this.productService.addComment(id, body.name, body.message, body.rating)
    }
     //axios.post(`${basicUrl}/product/${id}`, comment , { headers : headers })
}
