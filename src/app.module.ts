import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Authors } from './authors/authors.model';
import { AuthorsModule } from './authors/authors.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'teste',
      models: [Authors],
    }),
    AuthorsModule
  ],
})

export class AppModule {}
