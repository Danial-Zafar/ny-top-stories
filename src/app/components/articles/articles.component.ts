import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent {
  @Input() topStories: any;

  constructor(private router: Router) {}

  showDetails(uri: any) {
    let id = uri.split('/')[3];
    this.router.navigate(['/story-details', id]);
  }

  getStoryImageUrl(url: string) {
    url =
      url.match(/^(?:[a-z]+:)?\/\//i) === null
        ? `http://static01.nyt.com/${url}`
        : url;

    return url;
  }
}
