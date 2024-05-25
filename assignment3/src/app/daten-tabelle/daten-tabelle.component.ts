import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { DetailViewComponent } from '../detail-view/detail-view.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-daten-tabelle',
  standalone: true,
  imports: [DetailViewComponent],
  templateUrl: './daten-tabelle.component.html',
  styleUrls: ['./daten-tabelle.component.css'],
  encapsulation: ViewEncapsulation.None // Dies wird die Stile global machen
})
export class DatenTabelleComponent implements OnInit {
  @ViewChild(DetailViewComponent) detailView!: DetailViewComponent;
  data: any[] = [];
  activeButton: any = null;
  activeType: string | null = null;

  constructor() {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    const xmlHttp = new XMLHttpRequest();
    const mashupServerUrl = "https://cmnet.communitymashup.net/json/";
    xmlHttp.onreadystatechange = () => {
      if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
        this.data = JSON.parse(xmlHttp.responseText)['dataset']['items'];
        this.createButtons();
      }
    };
    xmlHttp.open("GET", mashupServerUrl, true);
    xmlHttp.send();
  }

  createButtons(): void {
    const buttonContainer = document.getElementById('buttonContainer');
    if (!buttonContainer) return;

    const types: string[] = [];
    const order = ['data:person', 'data:organisation'];
    order.forEach(type => {
      if (this.data.some(item => item.type === type)) {
        types.push(type);
      }
    });

    this.data.forEach(item => {
      if (!types.includes(item.type)) {
        types.push(item.type);
      }
    });

    types.forEach(type => {
      const button = document.createElement('button');
      button.textContent = type;
      button.id = type;
      button.addEventListener('click', () => this.toggleData(type));
      buttonContainer.appendChild(button);
    });
  }

  toggleData(type: string): void {
    if (this.activeType === type) {
      this.clearData();
    } else {
      this.showData(type);
    }
  }

  clearData(): void {
    const dataContainer = document.getElementById('dataContainer');
    if (dataContainer) {
      dataContainer.innerHTML = '';
    }

    if (this.activeButton) {
      this.activeButton.classList.remove('active');
    }
    this.activeButton = null;
    this.activeType = null;
  }

  showData(type: string): void {
    const dataContainer = document.getElementById('dataContainer');
    if (!dataContainer) return;

    dataContainer.innerHTML = '';
    const table = document.createElement('table');
    const headerRow = table.insertRow();
    if (type === 'data:person' || type === 'data:organisation') {
      const emptyHeaderCell = headerRow.insertCell();
      emptyHeaderCell.textContent = ''; // Leere Zelle für die Details-Spalte
    }
    const headers: string[] = [];

    this.data.forEach(item => {
      if (item.type === type) {
        const row = table.insertRow();
        if (type === 'data:person' || type === 'data:organisation') {
          const detailButton = row.insertCell();
          const button = document.createElement('button');
          button.textContent = 'Details';
          button.addEventListener('click', () => this.detailView.showModal(item));
          detailButton.appendChild(button);
        }

        for (const key in item) {
          if (!headers.includes(key)) {
            headers.push(key);
            const headerCell = headerRow.insertCell();
            headerCell.textContent = key;
          }
        }

        headers.forEach(header => {
          const cell = row.insertCell();
          cell.textContent = item[header];
        });
      }
    });

    dataContainer.appendChild(table);

    if (this.activeButton) {
      this.activeButton.classList.remove('active');
    }
    const clickedButton = document.getElementById(type);
    if (clickedButton) {
      clickedButton.classList.add('active');
      this.activeButton = clickedButton;
    }
    this.activeType = type;
  }
}