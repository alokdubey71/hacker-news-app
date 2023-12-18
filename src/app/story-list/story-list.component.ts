// story-list.component.ts

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css'],
})
export class StoryListComponent {
  @Input() stories: any[] = [];
  @Input() currentPage: number = 1;
  @Output() pageChanged = new EventEmitter<number>();
}
