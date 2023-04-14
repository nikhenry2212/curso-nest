import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';
import { EmailUnique } from 'src/validation/email_unique.validator';

export class UpdateUserDTO {
  @IsNotEmpty({ message: 'O nome não pode ser vazio !' })
  @IsOptional()
  name: string;

  @IsEmail(undefined, { message: 'e-mail informado é inválido !' })
  @EmailUnique({ message: 'e-mail existe na base!' })
  @IsOptional()
  email: string;

  @MinLength(6, { message: 'A senha deve ter 6 ou mais digítos!' })
  @IsOptional()
  password: string;
}
