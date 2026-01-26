import { IsOptional, IsString, IsUUID } from "class-validator";
import { CreateCarDTO } from "./create-car.dto";

export class UpdateCarDTO  {
    
    @IsUUID()
    @IsString()
    @IsOptional()
    readonly id?: string

    @IsString()
    readonly brand?: string

    @IsString({ message: 'El model debe ser un string' })
    @IsOptional()
    readonly model?: string
}