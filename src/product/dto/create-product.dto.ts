import { IsNumber, IsString } from "class-validator";

export class CreateProductDTO {
    @IsString()
    name: string

    @IsNumber()
    price: number

    @IsNumber()
    quantity: number
}