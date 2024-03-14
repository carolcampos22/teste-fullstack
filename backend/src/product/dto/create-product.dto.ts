import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateProductDTO {
    @IsString()
    name: string

    @IsNumber()
    price: number

    @IsNumber()
    quantity: number

    @IsOptional()
    url_image?: string
}