import { Injectable, signal } from '@angular/core';
import { Imovie } from '../models/imovies';

@Injectable({
  providedIn: 'root',
})
export class Store {
  private dataStatus = signal(true);
  private movies = signal<Imovie[]>([]);

  setMovies(val: Imovie[]) {
    this.movies.set(val);
    this.dataStatus.set(false);
  }

  get moviesArray() {
    return this.movies();
  }
}
