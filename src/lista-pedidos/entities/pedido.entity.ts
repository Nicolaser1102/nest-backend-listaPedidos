import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { NombrePaquete } from "../interfaces/paquete.enum";

@Schema()
export class Pedido {
    //_id?: string
    @Prop({required: true})
    nombreMascota: string; 


    @Prop({required: true})
    direccion: string;

    @Prop({required:true})
    paquete:  NombrePaquete;

    @Prop({unique: true, required: true})
    id_user: string;
}

export const PedidoSchema = SchemaFactory.createForClass(Pedido);
