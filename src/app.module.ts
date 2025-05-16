import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [UserModule,
      MongooseModule.forRoot('mongodb+srv://alfredaffia478:Alfred_0211.@crud1.etznzqn.mongodb.net/file-upload'),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
