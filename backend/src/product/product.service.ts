import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateProductDTO } from "./dto/create-product.dto";
import { PrismaService } from "../prisma/prisma.service";
import { UpdateProductDTO } from "./dto/update-product.dto";

@Injectable()
export class ProductService {
    constructor(private readonly prisma: PrismaService) {}

    async create({name, price, quantity, url_image}: CreateProductDTO){
        console.log(typeof price)
        return this.prisma.product.create({
            data: {
                name,
                price,
                quantity,
                url_image
            },
        })
    }

    async readAll() {
        return this.prisma.product.findMany()
    }

    async readOne(id: number) {
        
        return this.prisma.product.findUnique({
            where: {
                id,
            }
        })
    }

    async update(id: number, {name, price, quantity, url_image}: UpdateProductDTO) {
        await this.exists(id)

        const data: any = {}

        if(name){
            data.name = name
        }

        if(price){
            data.price = price
        }

        if(quantity){
            data.quantity = quantity
        }

        if(url_image){
            data.url_image = url_image
        }
        console.log(typeof price)
        return this.prisma.product.update({
            data,
            where: {
                id
            }
        })
    }

    async delete(id: number){
        await this.exists(id)

        return this.prisma.product.delete({
            where: {
                id
            }
        })
    }

    async exists(id: number){
        if(!(await this.readOne(id))) {
            throw new NotFoundException(`O produto de ID ${id} não existe`)
        }
    }
}

