import {
  registerDecorator,
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidatorOptions,
} from 'class-validator';
import { UserRepository } from 'src/Repository/UserRepository/User.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
@ValidatorConstraint({ async: true })
export class EmailUniqueValidator implements ValidatorConstraintInterface {
  constructor(private userRepository: UserRepository) {}

  async validate(email: any): Promise<boolean> {
    const userEmailExist = await this.userRepository.existWithEmail(email);
    return !userEmailExist;
  }
}

export const EmailUnique = (optionsValidator: any) => {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return (obj: Object, props: string) => {
    registerDecorator({
      target: obj.constructor,
      propertyName: props,
      options: optionsValidator,
      constraints: [],
      validator: EmailUniqueValidator,
    });
  };
};
