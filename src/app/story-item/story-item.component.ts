// src/app/story-item/story-item.component.ts

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-story-item',
  templateUrl: './story-item.component.html',
  styleUrls: ['./story-item.component.css']
})
export class StoryItemComponent {
  @Input() story: any;
  @Output() pageChanged = new EventEmitter<number>();
}
