import { IsNumber, IsString } from "class-validator";

export class CreateProductDTO {
    @IsString()
    name: string

    //@IsNumber()
    @IsString()
    price: number

    //@IsNumber()
    @IsString()
    quantity: number
}