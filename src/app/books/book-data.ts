import { Injectable, Query } from '@angular/core';
import { Book, Category } from './books/book';

@Injectable({
  providedIn: "root",
})

export class BookData {

  getBooks(): Book[] {

    const books = localStorage.getItem("books")
    return books ? JSON.parse(books) : []
  }

  addBook(book: Book, books: Book[]): Book[] {

    books.unshift(book)
    return books
  }

  setItemInLocalStorage(books: Book[]): void {
    localStorage.setItem("books", JSON.stringify(books))
  }

  filterByCategory(category: Category): Book[] {

    if (category === "allBooks") {
      return this.getBooks()
    }

    else {
      return this.getBooks().filter((book) => book.category.toLowerCase() == category)
    }
  }

  handleQuery(books: Book[], query: string, category: Category): Book[] {

    const cleanQuery = query.trim().toLowerCase()

    if (cleanQuery !== "" && category !== "allBooks") {
      return this.getQuery(this.filterByCategory(category), cleanQuery)
    }

    else if (cleanQuery === "" && category === "allBooks") {
      return this.getBooks()
    }

    else {
      return this.getQuery(books, cleanQuery)
    }
  }

  getQuery(books: Book[], cleanQuery: string): Book[] {

    return books.filter((book) => book.name.toLowerCase()
      .includes(cleanQuery))
  }
}
