import { Module } from '@nestjs/common';
import { UserRepositoryModule } from './UserRepository/user.repository.module';

@Module({
  imports: [UserRepositoryModule],
})
export class RepositryModule {}
