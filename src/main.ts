import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get('PORT');
  const isDevelopment = configService.get('STAGE') === 'dev';
  console.log(isDevelopment);
  console.log(port);

  app.enableCors();
  const documentBuilder = new DocumentBuilder()
    .setTitle('Post Api')
    .setDescription('The Post API')
    .setVersion('1.0')
    .setExternalDoc('api-json', 'api-json')
    .addBearerAuth();

  documentBuilder.addServer('https://gdb-training.herokuapp.com');
  if (isDevelopment) {
    documentBuilder.addServer(`http://localhost:${port}`);
  }

  const config = documentBuilder.build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(port);
}
bootstrap();
