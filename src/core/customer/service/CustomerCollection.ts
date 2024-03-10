import Customer from "../model/Customer";

export default interface CustomerCollection {
  getById(id: number): Promise<Customer | null>
}
