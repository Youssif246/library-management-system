import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { BookData } from '../book-data';
import { Book } from './book';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './books.html',
  styleUrl: './books.css',
})
export class Books {
  constructor(private bookSurvice: BookData) { }

  books: Book[] = []

  ngOnInit(): void {
    this.books = this.bookSurvice.getBooks()
  }
}
