import { Injectable } from '@angular/core';
import { Book } from './books/book';

@Injectable({
  providedIn: "root",
})
export class BookData {

  addBook(book: Book): void {
    let books = this.getBooks()
    books.push(book)
    localStorage.setItem("books", JSON.stringify(books))
  }

  getBooks(): Book[] {
    const books = localStorage.getItem("books")
    return books ? JSON.parse(books) : []
  }
}
