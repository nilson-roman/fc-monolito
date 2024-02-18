import { Column, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table({
  modelName: 'product-adm-table',
  tableName: 'products',
  timestamps: false
})
export default class ProductAdmModel extends Model {
  @PrimaryKey
  @Column({ allowNull: false })
  id: string;

  @Column({ allowNull: false })
  name: string;

  @Column({ allowNull: false })
  description: string;

  @Column({ allowNull: true })
  purchasePrice: number;

  @Column({ allowNull: true })
  stock: number;

  @Column({ allowNull: true })
  createdAt: Date;

  @Column({ allowNull: true })
  updatedAt: Date;
}
