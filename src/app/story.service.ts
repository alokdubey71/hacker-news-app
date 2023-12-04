import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  private apiUrl = 'YOUR_BACKEND_API_URL';

  constructor(private http: HttpClient) {}

  getNewestStories(page: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/stories?pageSize=10&page=${page}`);
  }

  searchStories(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/stories/search?query=${query}`);
  }
}
