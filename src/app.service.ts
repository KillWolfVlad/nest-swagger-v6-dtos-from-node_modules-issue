import { UserDto } from "@nest-swagger-v6-dtos-from-node-modules-issue/dtos";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getUser(): Promise<UserDto> {
    return Promise.resolve({
      id: "1",
      name: "user",
      email: "user@example.com",
      version: 2,
    });
  }
}
