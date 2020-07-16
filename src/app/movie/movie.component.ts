import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieComponent {
  @Input() movie: Movie;
}
