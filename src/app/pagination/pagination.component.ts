import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  @Input() currentPage: number = 1;
  @Output() pageChanged: EventEmitter<number> = new EventEmitter<number>();

  changePage(newPage: number) {
    if (newPage >= 1) {
      this.currentPage = newPage;
      this.pageChanged.emit(this.currentPage);
    }
  }
}
