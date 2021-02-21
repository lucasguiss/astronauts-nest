import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { AstronautModule } from './modules';

@Module({
  imports: [
    AstronautModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql'
    }),
    MongooseModule.forRoot('mongodb://localhost/nest')
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
