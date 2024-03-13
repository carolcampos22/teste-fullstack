import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { CreateProductDTO } from "./dto/create-product.dto";
import { UpdateProductDTO } from "./dto/update-product.dto";

@Controller('products')
export class ProductController {

    @Post()
    async create(@Body() { name, price, quantity }: CreateProductDTO) {
        return {
            name,
            price,
            quantity
        }
    }

    @Get()
    async readAll() {
        return { products: [] }
    }

    @Get(':id')
    async readOne(@Param('id', ParseIntPipe) id: number) {
        return { product: {}, id }
    }

    @Patch(':id')
    async update(@Body() { name, price, quantity }: UpdateProductDTO, @Param('id', ParseIntPipe) id: number) {
        return {
            name, 
            price, 
            quantity,
            id
        }
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        return {
            id
        }
    }

}