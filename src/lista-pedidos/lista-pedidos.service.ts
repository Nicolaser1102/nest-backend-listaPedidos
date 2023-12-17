import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreatePedidoDto } from './dto/create-pedido.dto'
import { UpdateListaPedidoDto } from './dto/update-lista-pedido.dto';
import { Pedido } from './entities/pedido.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class ListaPedidosService {

  constructor(
    @InjectModel(Pedido.name) 
    private pedidoModel: Model<Pedido>,
  ){}

  async create(createPedidoDto: CreatePedidoDto): Promise<Pedido> {
    
    try {
    
    
     
      const newPedido = new this.pedidoModel(createPedidoDto)
      await newPedido.save();
      
  
      return newPedido;
      
  
    } catch (error) {
      //Manejar errores /excepciones 
      if(error.code === 11000){
      throw new BadRequestException(`El pedido ya existe!`)
      }
      throw new InternalServerErrorException('Something terrible happen!')
    } 

  }


  async findPedidoById(pedidoID:string){

    const pedido = await this.pedidoModel.findById(pedidoID);
    return pedido;
  }


  findAll() {
    return `This action returns all listaPedidos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} listaPedido`;
  }

  update(id: number, updateListaPedidoDto: UpdateListaPedidoDto) {
    return `This action updates a #${id} listaPedido`;
  }

  remove(id: string) {
    this.pedidoModel.deleteOne({ id_user: id }).then(function(){
      console.log("Pedido borrado"); // Success
   }).catch(function(error){
      console.log(error); // Failure
   });
  }
}
