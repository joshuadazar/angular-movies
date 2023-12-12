import { Component, Input,OnInit } from '@angular/core';
import { Store } from '../../services/movies';
import { Imovie } from '../../models/imovies';
import { MaxCaracteresDirective } from '../../directives/max-words.directive';

@Component({
  selector: 'card-component',
  standalone: true,
  imports: [MaxCaracteresDirective],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit {

  @Input() movie?: Imovie

  ngOnInit(): void {
  }

}
