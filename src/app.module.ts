import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'process';
import { imports } from './graphql/imports';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';


@Module({
  imports: [
    GraphQLModule.forRoot({
      driver:ApolloDriver,
      autoSchemaFile:true,
    }),
    
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    TypeOrmModule.forRootAsync({
      imports:[ConfigModule],
      inject:[ConfigService],
      useFactory:async (ConfigService:ConfigService) => ({
        type: 'mysql',
        host:'127.0.0.1',
        port: ConfigService.get('MYSQL_PORT'),
        database: ConfigService.get('MYSQL_DATABASE'),
        username:ConfigService.get('MYSQL_USERNAME'),
        password: ConfigService.get('MYSQL_PASSWORD'),
        entities:[],
        synchronize:true,
      }),
    }),

    MongooseModule.forRoot('mongodb://127.0.0.1/app'),

    imports
    
  ],
  
})
export class AppModule {}
