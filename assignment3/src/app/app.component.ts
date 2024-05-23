import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root', // name of the component that is used in the index.html file: <app-root></app-root>
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html', // describes the html file that is used for this component
  styleUrl: './app.component.css' // describes the css file that is used for this component
})
export class AppComponent {
  title = 'assignment3';
}
