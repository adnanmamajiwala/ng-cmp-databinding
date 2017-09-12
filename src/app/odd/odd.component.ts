import {Component, Input, OnInit} from '@angular/core';
import {EventModel} from '../event.model';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {

  @Input() oddEvent: EventModel;

  constructor() { }

  ngOnInit() {
  }

}
