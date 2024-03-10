import Customer from '../../core/customer/model/Customer';
import CustomerCollection from '../../core/customer/service/CustomerCollection';

export default class CustomerCollectionMemory implements CustomerCollection {
  private readonly customers: Customer[] = [
    {
      id: 1,
      accountLimit: 100000,
      balance: 9092,
    }
  ];

  async getById(id: number): Promise<Customer | null> {
    return this.customers.find((customer) => customer.id === id) ?? null;
  }
}
