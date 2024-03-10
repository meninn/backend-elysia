import { Elysia } from "elysia";
import GetCustomerStatement from "../core/customer/service/GetCustomerStatement";

export default class GetCustomerStatementController {
  constructor(
    readonly server: Elysia,
    readonly useCase: GetCustomerStatement
  ) {
    server.get('/clientes/:id/extrato', async (req, res) => {
      const { id } = req.params;

      await useCase.execute(id);

      return {
        status: 200,
        body: {
          "saldo": {
            "total": -9098,
            "data_extrato": "2024-01-17T02:34:41.217753Z",
            "limite": 100000
          },
          "ultimas_transacoes": [
            {
              "valor": 10,
              "tipo": "c",
              "descricao": "descricao",
              "realizada_em": "2024-01-17T02:34:38.543030Z"
            },
            {
              "valor": 90000,
              "tipo": "d",
              "descricao": "descricao",
              "realizada_em": "2024-01-17T02:34:38.543030Z"
            }
          ]
        }
      }
    });
  }
}
