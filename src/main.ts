import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 3000;
  const config = new DocumentBuilder()
    .setTitle('Post')
    .setDescription('The task API description')
    .setExternalDoc('/api-json', '/api-json')
    .addServer(`http://localhost:${port}`)
    .setVersion('1.0')
    .addTag('Post Api')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.enableCors();
  await app.listen(port);
}
bootstrap();
