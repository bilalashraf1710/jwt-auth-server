import { Injectable, Options } from '@nestjs/common';
import { User } from '../../common/user/user.model';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserRepository } from 'src/common/user/user.repository';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userRepository: UserRepository,
  ) {}

  async signUp(email: string, password: string): Promise<User> {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = new User(Date.now().toString(), email, hashedPassword);
    this.userRepository.addUser(user);
    return user;
  }

  async signIn(email: string, password: string): Promise<string> {
    const user = this.userRepository.findUserByEmail(email);
    if (!user) {
      throw new Error('User not found');
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw new Error('Invalid credentials');
    }
    return this.jwtService.sign(
      { userId: user.id },
      { secret: process.env.JWT_SECRET },
    );
  }

  async validateUser(userId: string): Promise<User> {
    const user = this.userRepository.findUserById(userId);
    if (!user) {
      throw new Error('Invalid token');
    }
    return user;
  }
}
