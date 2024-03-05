import { Injectable, inject, signal } from '@angular/core';
import { Imovie } from '../models/imovies';
import { BehaviorSubject, Observable } from 'rxjs';
import { collectionData, Firestore, collection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class Store {

  private firestore = inject(Firestore);
  private collectionMovies = collection(this.firestore, 'movies');

  getCollectionMovies() {
    return collectionData(this.collectionMovies) as Observable<Imovie[]>;
  }

  // private dataStatus = signal(true);
  // private movies = signal<Imovie[]>([]);

  // setMovies(val: Imovie[]) {
  //   this.movies.set(val);
  //   this.dataStatus.set(false);
  // }

  // get moviesArray() {
  //   return this.movies();
  // }

  private moviesList: BehaviorSubject<Imovie[]> = new BehaviorSubject<Imovie[]>([
    {
      title: "Tenet",
      description: "Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
      rating: 7.8,
      duration: "2h 30 min",
      genre: "Action, Sci-Fi",
      releasedDate: "03/09/2020",
      trailerLink: "https://www.youtube.com/watch?v=LdOM0x0XDMo"
    },
    {
      title: "Spider-Man: Into the Spider-Verse",
      description: "A teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
      rating: 8.4,
      duration: "1h 57min",
      genre: "Action, Animation, Adventure",
      releasedDate: "14/12/2018",
      trailerLink: "https://www.youtube.com/watch?v=tg52up16eq0"
    },
    {
      title: "Knives Out",
      description: "A detective investigates the death of a patriarch of an eccentric, combative family.",
      rating: 7.9,
      duration: "2h 10min",
      genre: "Comedy, Crime, Drama",
      releasedDate: "27/11/2019",
      trailerLink: "https://www.youtube.com/watch?v=qGqiHJTsRkQ"
    },
    {
      title: "Guardians of the Galaxy",
      description: "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",
      rating: 8.0,
      duration: "2h 1min",
      genre: "Action, Adventure, Comedy",
      releasedDate: "01/08/2014",
      trailerLink: "https://www.youtube.com/watch?v=d96cjJhvlMA"
    },
    {
      title: "Avengers: Age of Ultron",
      description: "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.",
      rating: 7.3,
      duration: "2h 21min",
      genre: "Action, Adventure, Sci-Fi",
      releasedDate: "01/05/2015",
      trailerLink: "https://www.youtube.com/watch?v=tmeOjFno6Do"
    }
  ]);

  getMoviesCacheList$() {
    return this.moviesList.asObservable();
  }

}
