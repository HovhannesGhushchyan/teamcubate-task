import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModuleOptions } from '@nestjs/jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { Strategy } from 'passport-jwt';
import { User } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';
import { AuthService } from './auth.service';
import { AccessTokenPayload } from './dto/accessTokenPayload.dto';
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UsersService,
    private readonly configService: ConfigService,
  ) {
    super({
      jwtFromRequest: (req: Request) => {
        if (req && req.cookies) return req.cookies['jwt'];
      },
      ignoreExpiration: false,
      secretOrKey: configService.get<JwtModuleOptions>('jwt').secret,
    });
  }

  //at this point, json is decoded. and because of how JWTs work. if it's decoded succeefully then it's a correct token. passport will pass the decoded json
  //as a single parameter in validate function below
  async validate(payload: AccessTokenPayload) {
    const user: User = await this.userService.getUserByEmail(payload.email);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
