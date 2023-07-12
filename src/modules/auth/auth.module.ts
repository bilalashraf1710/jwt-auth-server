import { Module } from '@nestjs/common';
import { UserRepository } from 'src/common/user/user.repository';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, UserRepository],
})
export class AuthModule {}
