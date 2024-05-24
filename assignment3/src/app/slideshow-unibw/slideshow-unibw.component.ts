import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-slideshow-unibw',
  standalone: true,
  imports: [],
  templateUrl: './slideshow-unibw.component.html',
  styleUrl: './slideshow-unibw.component.css',
  encapsulation: ViewEncapsulation.None // Dies wird die Stile global machen
})
export class SlideshowUnibwComponent implements OnInit {
  slideIndex = 0;

  constructor() { }

  ngOnInit(): void {
    this.showSlides();
  }

  showSlides(): void {
    let i;
    const slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    this.slideIndex++;
    if (this.slideIndex > slides.length) { this.slideIndex = 1 }
    slides[this.slideIndex - 1].style.display = "block";
    setTimeout(() => this.showSlides(), 5000); // Wechselt die Slides alle 5 Sekunden
  }
}