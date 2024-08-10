import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';

const banco = require("./db.json");

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/login')
  validation(@Req() request: Request, @Res() response: Response) : void {   
    //const {email, password} = request.body;

    //const userExist = banco.users.find((item) => (item.email = email))
    //wat
  }
}
