import { Component, OnInit } from '@angular/core';
import {fadeInAmimation} from "../../animations/Route-animation";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  animations:[fadeInAmimation],
  host:{'@fadeInAmimation':''}
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
