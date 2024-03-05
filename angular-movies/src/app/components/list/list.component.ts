import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Store } from '../../services/movies';
import { Imovie } from '../../models/imovies';
import { Storage, ref, listAll, getDownloadURL } from '@angular/fire/storage';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {

  constructor(
    private ds$: Store,
    private storage: Storage,
  ) { }

  images: string[] = [];
  public movieList: Imovie[] = [];

  ngOnInit(): void {
    this.getMovies();
    this.getImages();
  }

  getMovies() {
    this.ds$.getCollectionMovies().subscribe((movies: Imovie[]) => {
      if (movies.length == 0) {
        this.ds$.getMoviesCacheList$().subscribe((cacheMovies: Imovie[]) => {
          this.movieList = cacheMovies;
        });
      } else {
        this.movieList = movies;
      }
    });
  }

  getImages() {
    const imagesRef = ref(this.storage, 'movies');

    listAll(imagesRef)
      .then(async response => {
        this.images = [];
        for (let item of response.items) {
          const url = await getDownloadURL(item);

          if (url.includes('.webp')) {
            this.images.push(url);
          }
        }
        this.movieList.forEach((movie, index) => { movie.image = this.images[index]; });
      })
      .catch(error => console.log(error));
  }
}
