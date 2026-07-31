import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BookData } from '../book-data';
import { Book, Category } from '../books/book';

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
    category: "programing",
    copies: 0,
    available: 0
  }

  handleAddBook(): void {
    this.book.available = this.book.copies
    this.bookService.setItemInLocalStorage(
      this.bookService.addBook(this.book, this.bookService.getBooks())
    )
    this.router.navigate(["books"])
  }

}
