import { PartialType } from '@nestjs/mapped-types';
import { CreatePedidoDto } from './create-pedido.dto';

export class UpdateListaPedidoDto extends PartialType(CreatePedidoDto) {}
