import axios from 'axios';

export class ProductsService {
  static async getAll() {
    return await axios.get('https://api.irontiger.ru/data/json/products.json');
  }
}
