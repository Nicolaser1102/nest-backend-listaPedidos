import { Module } from '@nestjs/common';
import { ListaPedidosService } from './lista-pedidos.service';
import { ListaPedidosController } from './lista-pedidos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Pedido, PedidoSchema } from './entities/pedido.entity';

@Module({
  controllers: [ListaPedidosController],
  providers: [ListaPedidosService],
  imports: [
    MongooseModule.forFeature([
      {
      name: Pedido.name,
      schema: PedidoSchema
    }
  ])
  ]
})
export class ListaPedidosModule {}
