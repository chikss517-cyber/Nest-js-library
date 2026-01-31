import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('App')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  @ApiOperation({ summary: 'Menampilkan pesan Hello' })
  @ApiResponse({ status: 200, description: 'Berhasil menampilkan Hello' })
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/welcome')
  @ApiOperation({ summary: 'Menampilkan pesan Welcome' })
  @ApiResponse({ status: 200, description: 'Berhasil menampilkan Welcome' })
  getWelcome(): string {
    return this.appService.getWelcome();
  }
}
