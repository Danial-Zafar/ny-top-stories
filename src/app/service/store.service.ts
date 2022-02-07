import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AticalModel } from '../models/articles.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  storiesSubject = new BehaviorSubject<AticalModel[]>([]);
  stories: AticalModel[] = this.storiesSubject.getValue();

  constructor() {}

  getStories() {
    return this.storiesSubject.value;
  }

  getStoriesById(id: string) {
    this.stories = this.storiesSubject.value;
    return this.stories.find((item) => item.uri.includes(id));
  }

  setStories(data: AticalModel[]) {
    this.storiesSubject.next(data);
  }

  unsetStories() {
    this.storiesSubject.next([]);
  }
}
