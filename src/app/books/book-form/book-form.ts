import { Component } from '@angular/core';
import { Book } from '../books/book';
import { BookData } from '../book-data';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './book-form.html',
  styleUrl: './book-form.css',
})
export class BookForm {
  constructor(private bookService: BookData, private router: Router) { }

  book: Book = {
    id: "",
    name: "",
    author: "",
    category: "",
    copies: 0,
    available: 0
  }

  addBook(): void {
    this.book.available = this.book.copies
    this.bookService.addBook(this.book)
    this.router.navigate(["books"])
  }

}
