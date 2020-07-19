import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from './movie.model';

const RESULT_FILE: string =
  'https://raw.githubusercontent.com/rfk91/filmweb-movies/master/gen3/result.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(private http: HttpClient) {}
  movies$: Observable<Movie[]> = this.http.get<Movie[]>(RESULT_FILE);
}
