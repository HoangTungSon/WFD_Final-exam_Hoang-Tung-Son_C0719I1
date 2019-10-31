import {Component, OnInit} from '@angular/core';
import {BookService} from '../book.service';

@Component({
  selector: 'app-single-page',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.css']
})
export class SinglePageComponent implements OnInit {

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

  read(i) {
    const book = this.bookList[i];
    this.bookService.deleteTodo(todo.id).subscribe(() => {
      this.todoList = this.todoList.filter(t => t.id !== todo.id);
    });
  }
}
