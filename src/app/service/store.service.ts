import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  storiesSubject = new BehaviorSubject<any>([]);
  stories: any[] = this.storiesSubject.getValue();

  constructor() { }

  getStories(){
    return this.storiesSubject.value;
  }

  getStoriesById(id: string){
    this.stories = this.storiesSubject.value;
    return this.stories.find(item => item.uri.includes(id));
  }

  setStories(data: any){
    this.storiesSubject.next(data);
  }

  unsetStories(){
    this.storiesSubject.next([]);
  }
}
