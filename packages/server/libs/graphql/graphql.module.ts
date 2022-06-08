import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    GraphQLModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        return {
          autoSchemaFile: true,
          context: ({ req }: { req: { headers: Record<string, string> } }) => ({ req }),
          uploads: {
            maxFileSize: configService.get<number>('MAX_FILE_SIZE'),
            maxFiles: 1,
          },
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class GraphqlModule {}
