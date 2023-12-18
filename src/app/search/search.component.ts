import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Output() searchClicked: EventEmitter<string> = new EventEmitter<string>();
  searchQuery: string = '';

  search() {
    this.searchClicked.emit(this.searchQuery);
  }
}
