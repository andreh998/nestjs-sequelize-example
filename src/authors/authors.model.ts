import { AutoIncrement, Column, Model, PrimaryKey, Table } from "sequelize-typescript";
 
@Table({
  tableName: 'authors',
  timestamps: false,
  createdAt: false,
  updatedAt: false
})
export class Authors extends Model { 
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;
  
  @Column
  firstname: string;

  @Column
  lastname: string;
}