import express, { Express } from "express";
import { Sequelize } from "sequelize-typescript";
import ClientModel from "../../modules/client-adm/repository/client.model";
import ProductModel from "../../modules/store-catalog/repository/product.model";
import ProductAdmModel from "../../modules/product-adm/repository/product-adm.model";
import TransactionModel from "../../modules/payment/repository/transaction.model";
import InvoiceModel from "../../modules/invoice/repository/invoice.model";
import InvoiceItemModel from "../../modules/invoice/repository/invoice-item.model";
import { clientRoute } from "./routes/client.route";
import { productRoute } from "./routes/product.route";
import { Umzug } from "umzug";
import { migrator } from "../../configs/sequelize/config-migrations/migrator";

export const app: Express = express();
app.get("/health", (req, res) => res.send("OK"));

app.use(express.json());
app.use("/clients", clientRoute);
app.use("/products", productRoute);

export let sequelize: Sequelize;
export let migration: Umzug<any>;

async function setupDb() {
    sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: ':memory:',
        logging: false
    });
    
    sequelize.addModels([ClientModel, ProductAdmModel, ProductModel, 
        TransactionModel, InvoiceModel, InvoiceItemModel]);

    migration = migrator(sequelize)
    await migration.up()
}

setupDb();
