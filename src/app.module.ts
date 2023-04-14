import { Module } from '@nestjs/common';

import { ControllerModule } from './Controller/controller.module';
import { RepositryModule } from './Repository/repository.module';

@Module({
  imports: [ControllerModule, RepositryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
