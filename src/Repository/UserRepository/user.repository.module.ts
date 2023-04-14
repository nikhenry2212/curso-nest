import { Module } from '@nestjs/common';
import { UsuarioModule } from 'src/Controller/Usuario/usuario.module';
import { UserRepository } from './User.repository';

@Module({
  imports: [UsuarioModule],
  providers: [UserRepository],
})
export class UserRepositoryModule {}
