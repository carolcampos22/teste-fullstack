import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateProductDTO } from "./dto/create-product.dto";
import { PrismaService } from "../prisma/prisma.service";
import { UpdateProductDTO } from "./dto/update-product.dto";

@Injectable()
export class ProductService {
    constructor(private readonly prisma: PrismaService) {}

    async create({name, price, quantity}: CreateProductDTO){
        
        return this.prisma.product.create({
            data: {
                name,
                price,
                quantity
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

    async update(id: number, data: UpdateProductDTO) {
        await this.exists(id)

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