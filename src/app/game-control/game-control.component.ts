import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {EventModel} from '../event.model';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() eventCreated = new EventEmitter<EventModel>();
  interval;
  startNumber =0;

  constructor() {
  }

  ngOnInit() {
  }

  startEmitting() {
    this.interval = setInterval(() => {
      this.eventCreated.emit(new EventModel(this.startNumber++));
    }, 1000);
  }

  stopEmitting() {
    clearInterval(this.interval);
  }
}
