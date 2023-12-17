import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ListaPedidosService } from './lista-pedidos.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdateListaPedidoDto } from './dto/update-lista-pedido.dto';


@Controller('lista-pedidos')
export class ListaPedidosController {
  constructor(private readonly listaPedidosService: ListaPedidosService) {}

  @Post()
  create(@Body() createPedidoDto: CreatePedidoDto) {
    console.log(createPedidoDto);
    return this.listaPedidosService.create(createPedidoDto);
  }

  @Get()
  findAll() {
    return this.listaPedidosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.listaPedidosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateListaPedidoDto: UpdateListaPedidoDto) {
    return this.listaPedidosService.update(+id, updateListaPedidoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.listaPedidosService.remove(id);
  }
}
