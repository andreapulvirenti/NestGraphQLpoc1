import { Module } from '@nestjs/common';
// import { AppController } from './Home/app.controller';
// import { AppService } from './Home/app.service';
import { GraphQLModule, Resolver, Query } from '@nestjs/graphql';
import { join } from 'path';



@Module({
  imports: [
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: join(process.cwd(), 'schema.gql')
    })
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule { }

