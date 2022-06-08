import { HttpModule, Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQuerySequelizeModule } from '@nestjs-query/query-sequelize';
import { UserCreateDto, UserDto, UserUpdateDto } from './dto';
import { UserCronService } from './user-cron.service';
import { UserResolver } from './resolver/user.resolver';
import { User } from './user.model';

@Module({
  imports: [
    HttpModule,
    NestjsQuerySequelizeModule.forFeature([User]),
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQuerySequelizeModule.forFeature([User])],
      resolvers: [
        {
          DTOClass: UserDto,
          EntityClass: User,
          CreateDTOClass: UserCreateDto,
          UpdateDTOClass: UserUpdateDto,
          read: { defaultResultSize: 50000, maxResultsSize: 100000 },
        },
      ],
    }),
  ],
  providers: [UserResolver, UserCronService],
  exports: [NestjsQuerySequelizeModule.forFeature([User])],
})
export class UserModule {}
