import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');


  const config = new DocumentBuilder()
    .setTitle('Docs')
    .setDescription('Descrição da api SWAGGER')
    .setVersion('1.0')
    .addTag('docs')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, documentFactory);
  
  // Configurar CORS para permitir requisições de http://localhost:3001
  app.enableCors({
    origin: 'http://localhost:3001', // Origem do seu frontend
    methods: 'GET,HEAD,POST,PUT,DELETE,PATCH', // Métodos permitidos
    credentials: true, // Permitir envio de cookies, se necessário
  });
  
  await app.listen(3000);
}
bootstrap();


