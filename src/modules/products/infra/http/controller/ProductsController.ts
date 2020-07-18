import { Request, Response } from 'express';

import { container } from 'tsyringe';
import CreateProductService from '@modules/products/services/CreateProductService';
import ListProductsService from '@modules/products/services/ListProductsService';

export default class ProductsController {
  public async create(request: Request, response: Response): Promise<Response> {
    // TODO
    const { name, price, quantity } = request.body;

    const createProduct = container.resolve(CreateProductService);

    const product = await createProduct.execute({
      name,
      price,
      quantity,
    });

    return response.status(200).json(product);
  }

  public async index(reques: Request, response: Response): Promise<Response> {
    const productsFind = container.resolve(ListProductsService);

    const products = await productsFind.execute();

    return response.status(200).json(products);
  }
}
