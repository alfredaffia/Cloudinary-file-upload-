import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { CloudinaryModule } from './cloudinary/cloudinary.module';


@Module({
  imports: [UserModule,
        ConfigModule.forRoot({
      isGlobal: true
    }), 
    MongooseModule.forRootAsync({
      imports:[ConfigModule],
      inject:[ConfigService],
      useFactory: async (configService: ConfigService) => ({
   uri: configService.get<string>('DB_URI'),
   
      })
      }), CloudinaryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
