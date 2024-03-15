import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { CreateProductDTO } from "./dto/create-product.dto";
import { UpdateProductDTO } from "./dto/update-product.dto";
import { ProductService } from "./product.service";

@Controller('products')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Post()
    async create(@Body() { name, price, quantity, url_image }: CreateProductDTO) {
        if(typeof price === 'string') {
            price = parseFloat(price)
        }
        return this.productService.create({ name, price, quantity, url_image })
    }

    @Get()
    async readAll() {
        return this.productService.readAll()
    }

    @Get(':id')
    async readOne(@Param('id', ParseIntPipe) id: number) {
        return this.productService.readOne(id)
    }

    @Patch(':id')
    async update(@Body() data: UpdateProductDTO, @Param('id', ParseIntPipe) id: number) {
        if (typeof data.price === 'string') {
            data.price = parseFloat(data.price);
        }
        return this.productService.update(id, data)
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        return this.productService.delete(id)
    }

}