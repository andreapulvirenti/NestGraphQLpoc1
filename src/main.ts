import { NestFactory } from '@nestjs/core';
// import { AppModule } from './Home/app.module';
import { ProductModule } from './Products/products.module';


async function bootstrap() {
  const app = await NestFactory.create(ProductModule);
  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
