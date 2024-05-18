import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateEntryDto } from './dto/createEntry.dto';
import { AppService } from 'src/app.service';

@Controller('books')
export class BooksController {
  constructor(private readonly appService: AppService) {}

  @Post('create')
  async createEntry(@Body() createEntryDto: CreateEntryDto) {
    return createEntryDto;
  }

  @Get('entries')
  getEntries(): object[] {
    return this.appService.books;
  }

  @Get('entries/:id')
  getEntry(@Param('id') id: string): object {
    return (
      this.appService.books.find(
        ({ id: bookId }) => bookId === parseInt(id),
      ) || { status: 'No matching book found' }
    );
  }
}
