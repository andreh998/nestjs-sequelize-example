import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Authors } from "./authors.model";
import { AuthorsController } from "./authors.controller";
import { AuthorsService } from "./authors.service";

@Module({
  imports: [SequelizeModule.forFeature([Authors])],
  controllers: [ AuthorsController ],
  providers: [ AuthorsService ],
})

export class AuthorsModule {}

