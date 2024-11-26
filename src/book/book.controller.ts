import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { BookService } from './book.service';
import { Book } from './schemas/book.schemas';
import { BookDto } from "./dto/book.dto";

@Controller('books')
export class BookController {
  constructor(private bookService: BookService) {}

  @Get() async getAllBooks(): Promise<Book[]> {
    return this.bookService.findAll();
  }

  @Post() async createBook(@Body() book: BookDto): Promise<Book> {
    return this.bookService.create(book);
  }

  @Get(':id') async getBookById(@Param('id') id: string): Promise<Book> {
    return this.bookService.findByBookID(id);
  }

  @Delete(':id') async deleteBookById(@Param('id') id: string): Promise<Book> {
    return this.bookService.deleteBYBookID(id);
  }

  @Put(':id') async updateBook(@Param('id') id: string, @Body() book: BookDto): Promise<Book> {
    return this.bookService.updateBook(id, book);
  }

}
