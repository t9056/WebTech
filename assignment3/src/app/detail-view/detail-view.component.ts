import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class DetailViewComponent {
  @Input() data: any;
  isVisible: boolean = false;

  showModal(data: any) {
    this.data = data;
    this.isVisible = true;
  }

  closeModal() {
    this.isVisible = false;
  }
}