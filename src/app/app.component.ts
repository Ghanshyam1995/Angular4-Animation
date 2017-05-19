import { Component } from '@angular/core';
import {fadeInAmimation} from "../animations/Route-animation";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[fadeInAmimation],
  host:{'@fadeInAmimation':''}

})
export class AppComponent {
  title = 'app works!';
}
