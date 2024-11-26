import { Injectable, NotFoundException } from '@nestjs/common';
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
    const book = await this.bookModel.findById(id);
    if (!book) {
      throw new NotFoundException('Book is not found!');
    }
    return book;
  }

  async deleteBYBookID(id: string): Promise<Book> {
    return this.bookModel.findByIdAndDelete(id);
  }

  async updateBook(id: string, book: Book): Promise<Book> {
    return this.bookModel.findByIdAndUpdate(id, book, {
      new: true,
      runValidators: true,
    });
  }
}
