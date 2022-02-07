import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';

import { ApiService } from 'src/app/service/api.service';
import { environment } from 'src/environments/environment';
import { StoreService } from 'src/app/service/store.service';
import { AppApiUrls } from 'src/app/constants/api-url';
import { AuthService } from 'src/app/service/auth.service';
import { AticalModel } from 'src/app/models/articles.model';

@Component({
  selector: 'top-stories',
  templateUrl: './top-stories.component.html',
  styleUrls: ['./top-stories.component.scss']
})
export class TopStoriesComponent implements OnInit {
  topStories: AticalModel[] = [];
  searchTxt: string = '';
  searchTxtUpdate = new Subject<string>();
  searchHistory: string[] = [];

  constructor(
    private apiService: ApiService,
    private router: Router,
    private storeService: StoreService,
    private authService: AuthService
  ) {
    this.subscribeSearchText();
  }

  ngOnInit() {
    this.selectCategory('world');
  }

  subscribeSearchText() {
    this.searchTxtUpdate
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe((value) => {
        this.searchStories(value);
      });
  }

  showDetails(uri: any) {
    let id = uri.split('/')[3];
    this.router.navigate(['/story-details', id]);
  }

  selectCategory(storyCategory: string) {
    this.apiService
      .get(
        AppApiUrls.NY.getStoriesByCategory(storyCategory, environment.api_key)
      )
      .subscribe({
        next: (response: any) => {
          this.topStories = response.results;
          this.storeService.setStories(this.topStories);
        },
        error: (err) => {
          console.error(err);
        }
      });
  }

  searchStories(text: string) {
    if (this.searchTxt == '') {
      this.selectCategory('world');
    } else {
      this.apiService
        .get(AppApiUrls.NY.searchStoriesByText(text, environment.api_key))
        .subscribe({
          next: (response: any) => {
            this.topStories = response.response.docs;
            this.storeService.setStories(this.topStories);

            if (
              !this.searchHistory.some((q) => q === this.searchTxt) &&
              this.searchTxt != ''
            ) {
              this.searchHistory = [...this.searchHistory, this.searchTxt];
            }
          },
          error: (err) => {
            console.error(err);
          }
        });
    }
  }

  onOptionsSelected(value: string) {
    this.searchStories(value);
  }

  logOut() {
    this.authService.logOut();
    this.router.navigate(['/login']);
  }
}
