import {
  Body,
  Controller,
  Post,
  Get,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { UserRepository } from '../../Repository/UserRepository/User.repository';
import { CreateUserDTO } from '../../Dto/CreateUser.dto';
import { UserEntity } from '../../model/user.entity';
import { v4 as uuid } from 'uuid';
import { ListUserDTO } from '../../Dto/ListUser.dto';
import { UpdateUserDTO } from '../../Dto/UpdateUser.dto';

@Controller('/usuarios')
export class UsuarioController {
  constructor(private users: UserRepository) {}

  @Post()
  async createUser(@Body() req: CreateUserDTO) {
    const userEntity = new UserEntity();
    userEntity.email = req.email;
    userEntity.name = req.name;
    userEntity.password = req.password;
    userEntity.id = uuid();

    this.users.saveUser(userEntity);
    return {
      user: new ListUserDTO(userEntity.id, userEntity.name),
      message: ' Usúario criado com sucesso! ',
    };
  }

  @Get()
  async getUser() {
    const userSave = await this.users.getUser();
    const userList = userSave.map(
      (user) => new ListUserDTO(user.id, user.name),
    );
    return userList;
  }

  @Put('/:id')
  async updateUser(@Param('id') id: string, @Body() req: UpdateUserDTO) {
    const userUpdated = await this.users.updatedUser(id, req);
    console.log('aqui', userUpdated);
    return {
      user: userUpdated,
      message: 'Usuário atualizado com sucesso!',
    };
  }
  @Delete('/:id')
  async deleteUser(@Param('id') id: string) {
    const userDelected = await this.users.delectedUser(id);
    return {
      user: userDelected,
      message: 'Usuário deletado com sucesso!',
    };
  }
}
