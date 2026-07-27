import { Component, inject } from '@angular/core';
import { BookData } from '../books/book-data';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  bookSurvice = inject(BookData)

  totalBooks: number = 0
  ngOnInit(): void {
    this.totalBooks = this.bookSurvice.getBooks().length
  }
}
