import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { CloudinaryService } from '../cloudinary/cloudinary.service';

@Injectable()
export class UserService {
    constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
    // private jwtService: JwtService,
        private readonly cloudinaryService: CloudinaryService,
  ) { }
  async createUser(createUserDto: CreateUserDto, profilePicture?: Express.Multer.File) {
    const newUser = new this.userModel(createUserDto);

    if (profilePicture) {
      try {
        const uploadResult = await this.cloudinaryService.uploadFile(profilePicture);
        newUser.profilePictureUrl = uploadResult.secure_url;
      } catch (error) {
        console.error('Error uploading profile picture:', error);
        // Handle error as needed
      }
    }

    return newUser.save();
  }

  // Add other methods for finding, updating, deleting users


  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
