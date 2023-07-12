import { Controller, Post, Body, Req } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signUp(
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    const user = await this.authService.signUp(email, password);
    return { message: 'User signed up successfully', user };
  }

  @Post('signin')
  async signIn(
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    const token = await this.authService.signIn(email, password);
    return { message: 'User signed in successfully', token };
  }
}
