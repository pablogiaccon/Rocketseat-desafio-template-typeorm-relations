import { Request, Response } from 'express';

import CreateCustomerService from '@modules/customers/services/CreateCustomerService';
import ListCustomersService from '@modules/customers/services/ListCustomersService';

import { container } from 'tsyringe';

export default class CustomersController {
  public async create(request: Request, response: Response): Promise<Response> {
    // TODO
    const { name, email } = request.body;

    const createCustomer = container.resolve(CreateCustomerService);

    const customer = await createCustomer.execute({
      name,
      email,
    });

    return response.status(200).json(customer);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const getCustomers = container.resolve(ListCustomersService);

    const customers = await getCustomers.execute();

    return response.status(200).json(customers);
  }
}
