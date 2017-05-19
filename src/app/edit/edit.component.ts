import { Component, OnInit } from '@angular/core';
import {fadeInAmimation} from "../../animations/Route-animation";
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  animations:[fadeInAmimation],
  host:{'@fadeInAmimation':''}
})
export class EditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
