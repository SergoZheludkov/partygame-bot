/* eslint-disable camelcase */
import { Field, InputType } from '@nestjs/graphql';
import { IsString, IsDefined, Length, IsNumber, IsOptional } from 'class-validator';

@InputType('UserCreate')
export class UserCreateDto {
  @Field()
  @IsDefined()
  @IsNumber()
  id: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  @Length(1, 50)
  firstname?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  @Length(1, 50)
  lastname?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  @Length(1, 50)
  username?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  who_invite?: string;

  @Field()
  @IsDefined()
  @IsString()
  @Length(2, 2)
  lang: string;
}
