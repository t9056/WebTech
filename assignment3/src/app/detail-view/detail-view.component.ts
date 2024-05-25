import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

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
  imageUrl: string | null = null;

  constructor(private http: HttpClient) {}

  showModal(data: any) {
    this.data = data;
    this.isVisible = true;
    this.loadImage(data.images);
  }

  closeModal() {
    this.isVisible = false;
  }

  loadImage(ident: string) {
    const url = `https://cmnet.communitymashup.net/json/`; // API-URL anpassen
    this.http.get(url).subscribe((response: any) => {
      const items = response.dataset.items;
      const imageItem = items.find((item: any) => item.type === 'data:image' && item.ident === ident);
      if (imageItem) {
        this.imageUrl = imageItem.fileUrl; // Verwenden Sie die fileUrl-Eigenschaft
      } else {
        this.imageUrl = null; // Kein Bild gefunden
      }
    });
  }
}