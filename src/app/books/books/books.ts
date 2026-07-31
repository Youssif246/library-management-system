import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { BookData } from '../book-data';
import { Book, Category } from './book';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './books.html',
  styleUrl: './books.css',
})
export class Books {
  constructor(private bookSurvice: BookData) { }

  disblayedBooks: Book[] = []
  processedBooks: Book[] = []
  category: Category = "allBooks"
  query: string = ''

  ngOnInit(): void {
    const books = this.bookSurvice.getBooks()
    this.processedBooks = books
    this.disblayedBooks = books
  }

  getQuery(processedBooks: Book[], query: string, category: Category): void {
    this.disblayedBooks = this.bookSurvice.handleQuery(processedBooks, query, category)
  }

  filterByCategory(category: Category): void {
    this.processedBooks = this.bookSurvice.filterByCategory(category)
    this.disblayedBooks = this.processedBooks
  }

}
