import { INestApplication } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

import { AppModule } from "./app.module";

function setupSwagger(app: INestApplication) {
  const options = new DocumentBuilder().build();

  SwaggerModule.setup("api", app, SwaggerModule.createDocument(app, options));
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  setupSwagger(app);

  await app.listen(3000);
}

bootstrap();
