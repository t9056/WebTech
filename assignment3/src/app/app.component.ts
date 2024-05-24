import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatenTabelleComponent } from './daten-tabelle/daten-tabelle.component';
import { SlideshowUnibwComponent } from './slideshow-unibw/slideshow-unibw.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DatenTabelleComponent, SlideshowUnibwComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'assignment3';
}
