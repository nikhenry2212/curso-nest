import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller';
// import { RepositryModule } from '../../Repository/repository.module';
import { UserRepository } from '../../Repository/UserRepository/User.repository';
import { EmailUniqueValidator } from '../../validation/email_unique.validator';

@Module({
  imports: [UsuarioModule],
  controllers: [UsuarioController],
  providers: [UserRepository, EmailUniqueValidator],
})
export class UsuarioModule {}
