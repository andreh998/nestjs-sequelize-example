import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Sequelize } from "sequelize-typescript";
import { Authors } from "./authors.model";

@Injectable()
export class AuthorsService {
  constructor(
    @InjectModel(Authors)
    private authorsModel: typeof Authors,
    private sequelize: Sequelize
    ) {}

  findAll(): Promise<Authors[]> {
    return this.authorsModel.findAll();
  }


}