import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Books } from './books/books/books';
import { Members } from './members/members';
import { Borrowings } from './borrowings/borrowings';
import { BookForm } from './books/book-form/book-form';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard },
  { path: 'books', component: Books },
  { path: 'add-book', component: BookForm },
  { path: 'members', component: Members },
  { path: 'borrowings', component: Borrowings }
];
