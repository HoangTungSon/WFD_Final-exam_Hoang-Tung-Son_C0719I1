import {Component, OnInit} from '@angular/core';
import {BookService} from '../book.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-single-page',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.css']
})
export class SinglePageComponent implements OnInit {

  bookList: IBook[] = [];
  inputControl = new FormControl();

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.bookService.getBook().subscribe(next => {
      this.bookList = next;
    }, error => {
      console.log(error);
    }, () => {
      console.log('complete');
    });
  }

  addBook() {
    const book: IBook = {
      id: 100 * Math.random(),
      name: this.inputControl.value,
      read: true
    };

    this.bookService.createBook(book).subscribe(next => {
      this.bookList.unshift(next);
      this.inputControl.setValue('');
    });

  }

  read(i) {
    const book = this.bookList[i];
    book.read = false;
    this.bookService.updatebook(book).subscribe(() => {
      console.log('success');
    });
  }

}
