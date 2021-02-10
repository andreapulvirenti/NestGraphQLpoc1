import { Injectable } from '@nestjs/common';
import { Product } from './products.model';
import { ProductInput } from './dto/product-input';



@Injectable()
export class ProductsService {

    async sayHello(data: ProductInput): Promise<Product> {
        return {} as any;
    }

}
