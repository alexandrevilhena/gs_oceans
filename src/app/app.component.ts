import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OceanComponent } from "./oceans/ocean.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, OceanComponent]
})
export class AppComponent {
  title = 'app';
}
