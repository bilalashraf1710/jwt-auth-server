import { Injectable } from '@nestjs/common';
import { User } from './user.model';

@Injectable()
export class UserRepository {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  private users: User[] = [];

  addUser(user: User) {
    this.users.push(user);
  }
  findUserByEmail(email: string) {
    return this.users.find((u) => u.email === email);
  }
  findUserById(id: string) {
    return this.users.find((u) => u.id === id);
  }
}
