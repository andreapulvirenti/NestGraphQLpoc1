import { Resolver, Query } from '@nestjs/graphql'
import { Product } from './products.model'
import { ProductsService } from './products.service';

@Resolver(of => Product)
export class ProductsResolver {
    constructor(private readonly productsService: ProductsService) {

    }

    @Query(returns => Product)
    sayHello(): string {
        return 'Hello World!';
    }
}
