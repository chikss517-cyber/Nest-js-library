import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'XI RPL 3';
  }
  getWelcome(): string {
    return 'Welcome to Backend Library!';
  }
}
