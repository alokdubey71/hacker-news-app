// app.component.ts

import { Component, OnInit } from '@angular/core';
import { HackerNewsApiService } from './services/hacker-news-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  filteredStories: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 10;

  constructor(private hackerNewsService: HackerNewsApiService) {}

  ngOnInit(): void {
    this.loadStories(this.currentPage);
  }

  loadStories(page: number): void {
    const startItem = (page - 1) * this.itemsPerPage;
    const endItem = startItem + this.itemsPerPage;

    this.hackerNewsService.getStories('new', startItem, endItem).subscribe(
      (data: any) => {
        this.filteredStories = data;
      },
      (error) => {
        console.error('Error loading stories:', error);
      }
    );
  }
}
