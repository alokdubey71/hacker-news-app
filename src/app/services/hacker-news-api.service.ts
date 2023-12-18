// hacker-news-api.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HackerNewsApiService {
  private apiUrl = 'https://hacker-news.firebaseio.com/v0';

  constructor(private http: HttpClient) {}

  getStories(type: string, start: number, end: number): Observable<any> {
    const url = `${this.apiUrl}/${type}stories.json`;
    return this.http.get<number[]>(url).pipe(
      switchMap((storyIds: number[]) => {
        const requests = storyIds.slice(start, end).map((id) =>
          this.http.get(`${this.apiUrl}/item/${id}.json`)
        );
        return forkJoin(requests);
      })
    );
  }
}
