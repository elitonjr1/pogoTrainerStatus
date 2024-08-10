import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return JSON.stringify({ name: "hello world"});
  }

  validateLogin(): string {
    return "";//return banco.users.find((item) => item.email = email);
  }
}


