import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  public books = [
    { id: 0, name: 'test' },
    { id: 1, name: 'test1' },
    { id: 2, name: 'test2' },
    { id: 3, name: 'test3' },
  ];
  getHello(): string {
    return 'Hello World!';
  }
}
