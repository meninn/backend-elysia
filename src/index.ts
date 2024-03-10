import { Elysia } from "elysia";
import CustomerCollectionMemory from "./external/memory/CustomerCollectionMemory";
import GetCustomerStatement from "./core/customer/service/GetCustomerStatement";
import GetCustomerStatementController from "./adapters/GetCustomerStatementController";

const app = new Elysia();

const customerColletion = new CustomerCollectionMemory();
const getCustomerStatement = new GetCustomerStatement(customerColletion);
new GetCustomerStatementController(app, getCustomerStatement);

app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
