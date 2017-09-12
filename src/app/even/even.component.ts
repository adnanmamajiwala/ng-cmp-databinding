import {Component, Input, OnInit} from '@angular/core';
import {EventModel} from '../event.model';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {

  @Input() evenEvent: EventModel;

  constructor() { }

  ngOnInit() {
  }

}
