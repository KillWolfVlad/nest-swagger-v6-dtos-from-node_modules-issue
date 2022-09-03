import { UserDto } from "@nest-swagger-v6-dtos-from-node-modules-issue/dtos";
import { Controller, Get } from "@nestjs/common";

import { AppService } from "./app.service";

@Controller("/")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/")
  public getUser(): Promise<UserDto> {
    return this.appService.getUser();
  }
}
