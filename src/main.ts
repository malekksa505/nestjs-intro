import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Nestjs Masterclass - Blog App API')
    .setDescription('Use the Base API URL as http://localhost:3005')
    .setTermsOfService('http://localhost:3005/terms-of-service')
    .setLicense('MIT', 'http://salam.sa')
    .addServer('http://localhost:3005')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  await app.listen(3005);
}
bootstrap();
