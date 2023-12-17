import { Module, ValidationPipe } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { ListaPedidosModule } from './lista-pedidos/lista-pedidos.module';
import { APP_PIPE } from '@nestjs/core';


@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI,{
      dbName: process.env.MONGO_DB_NAME}),
    ListaPedidosModule],
  controllers: [],
  providers: []
  ,
})
export class AppModule {}
