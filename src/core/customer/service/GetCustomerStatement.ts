import UseCase from "../../shared/UseCase";
import CustomerCollection from "./CustomerCollection";

type Input = {
  id: number;
};

export default class GetCustomerStatement implements UseCase<Input, void> {
  constructor(private readonly collection: CustomerCollection) { }

  async execute(input: Input): Promise<void> {
    const { id } = input;

    const customer = await this.collection.getById(id);
  }
}
