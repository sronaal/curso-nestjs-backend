import { IsEmpty, IsString } from "class-validator"

export class CreateCarDTO{

    @IsString()
    readonly brand: string

    @IsString({message: 'El model debe ser un string'})
    readonly model: string
}