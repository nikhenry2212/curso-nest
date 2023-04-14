import { Injectable } from '@nestjs/common';
import { UserEntity } from '../../model/user.entity';

@Injectable()
export class UserRepository {
  private users: UserEntity[] = [];
  async saveUser(user: UserEntity) {
    this.users.push(user);
    console.log(this.users);
  }

  async getUser() {
    return this.users;
  }

  async existWithEmail(email: string) {
    const isUser = this.users.find((user) => user.email === email);

    return isUser !== undefined;
  }

  async updatedUser(id: string, req: Partial<UserEntity>) {
    const user = this.getId(id);
    Object.entries(req).forEach(([key, value]) => {
      if (key === 'id') {
        return;
      }
      user[key] = value;
    });
    // console.log(possibleUser);
    return user;
  }

  private async getId(id: string) {
    const possibleUser = await this.users.find(
      (userSave) => userSave.id === id,
    );
    console.log(possibleUser);

    if (!possibleUser) {
      throw new Error('Usuário não existe!');
    }
    return possibleUser;
  }

  async delectedUser(id: string) {
    const user = this.getId(id);

    this.users = this.users.filter((userSave) => userSave.id !== id);
    return user;
  }
}
