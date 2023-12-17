import { IsString } from "class-validator";


export class CreatePedidoDto {

    @IsString() //verificadores
    nombreMascota: string;

    @IsString()
    direccion: string;

    @IsString()
    paquete: string;

    @IsString()
    id_user: string;




}
