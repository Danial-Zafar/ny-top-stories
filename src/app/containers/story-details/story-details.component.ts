import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppApiUrls } from 'src/app/constants/api-url';

import { ApiService } from 'src/app/service/api.service';
import { StoreService } from 'src/app/service/store.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-story-details',
  templateUrl: './story-details.component.html',
  styleUrls: ['./story-details.component.scss']
})
export class StoryDetailsComponent implements OnInit {
  item: any;
  id: string = '';
  storyReiews: any[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private storeService: StoreService,
    private apiService: ApiService
  ) {
    this.activatedRoute.params.subscribe((x) => {
      this.id = x['id'];

      if (this.id) {
        this.item = this.storeService.getStoriesById(this.id);
      }
    });
  }

  ngOnInit(): void {
    this.getArticalReviews();
  }

  getArticalReviews() {
    this.apiService
      .get(
        AppApiUrls.NY.getStoryReviewByUrl(this.item.url, environment.api_key)
      )
      .subscribe({
        next: (response: any) => {
          this.storyReiews = response.results;
        },
        error: (err) => {
          console.error('error:', err);
        }
      });
  }

  getStoryImageUrl(url: string) {
    url =
      url.match(/^(?:[a-z]+:)?\/\//i) === null
        ? `http://static01.nyt.com/${url}`
        : url;

    return url;
  }
}
