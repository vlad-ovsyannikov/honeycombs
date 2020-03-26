import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
      .setTitle('HC-CORE-API')
      .setDescription('HC-CORE-API API description')
      .setVersion('1.0')
      .addTag('HC-CORE-API')
      .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
