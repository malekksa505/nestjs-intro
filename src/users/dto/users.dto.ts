import {
  IsEmail,
  IsString,
  IsNotEmpty,
  IsOptional,
  Matches,
} from 'class-validator';

export class UserCreateDTO {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsOptional()
  lastName?: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,{
    message: 'It must be at least 8 characters long.\nThe password must contain at least one digit, one lowercase letter, and one uppercase letter.'
  })
  password: string;
}
