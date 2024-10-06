import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { GetUserDto } from '../dto/get-user.dto';
import { AuthService } from 'src/auth/providers/auth.service';

@Injectable()
export class UsersService {
    constructor(@Inject(forwardRef(()=>AuthService)) private readonly authService: AuthService){}
  public findAll(getUserDto: GetUserDto, limit: number, page: number) {
    const isAuth = this.authService.isAuth();
    console.log('isAuth', isAuth);
    return [
      {
        name: 'Malek',
        email: 'malek@example.com',
      },
      {
        name: 'Abeer',
        email: 'abeer@example.com',
      },
    ];
  }


  public findOneById(userId: string) {
    return [{
        id:1,
        firsName: 'malek',
        emaile: 'malekksa505@gmail.com'
    }]
  }
}
