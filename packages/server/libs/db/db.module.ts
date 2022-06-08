import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    ConfigModule,
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        const database = configService.get<string>('PG_DATABASE');
        const username = configService.get<string>('DB_USERNAME');
        const password = configService.get<string>('DB_PASSWORD');
        const host = configService.get<string>('DB_HOST');
        const port = configService.get<number>('DB_PORT');
        const force = configService.get<string>('DB_SYNC_FORCE') === 'true';
        const alter = configService.get<string>('DB_SYNC_ALTER') !== 'false';

        return {
          host,
          port,
          dialect: 'postgres',
          database,
          username,
          password,
          autoLoadModels: true,
          synchronize: true,
          logging: true,
          sync: { alter, force },
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class DbModule {}
