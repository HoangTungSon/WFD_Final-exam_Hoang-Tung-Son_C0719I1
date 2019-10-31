import {Component, OnInit} from '@angular/core';
import {BookService} from '../book.service';

@Component({
  selector: 'app-read-page',
  templateUrl: './read-page.component.html',
  styleUrls: ['./read-page.component.css']
})
export class ReadPageComponent implements OnInit {

  bookList: IBook[] = [];

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

  readAgain(i) {
    const book = this.bookList[i];
    book.read = true;
    this.bookService.updatebook(book).subscribe(() => {
      console.log('success');
    });
  }

}
