import { Injectable } from '@nestjs/common';
import { Book } from './schemas/book.schemas';
import * as mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class BookService {
  constructor(
    @InjectModel(Book.name) private bookModel: mongoose.Model<Book>,
  ) {}

  async findAll(): Promise<Book[]> {
    return this.bookModel.find();
  }

  async create(book: Book): Promise<Book> {
    return this.bookModel.create(book);
  }

  async findByBookID(id: string): Promise<Book> {
    const values = this.bookModel.findById(id);
    console.log(values)
    return values;
  }

}
