import { Module } from '@nestjs/common';
import { UsuarioModule } from './Usuario/usuario.module';

@Module({
  imports: [UsuarioModule],
  //   controllers: [UsuarioModule],
})
export class ControllerModule {}
