import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  private readonly API_URL = 'http://localhost:8081/books';

  constructor(private http: HttpClient) {
  }

  getBook(count = 4): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.API_URL).pipe(
      map(response => response.filter((book, i) => i < count))
    );
  }
}
