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
  eventModel: EventModel = new EventModel(0);

  constructor() {
  }

  ngOnInit() {
  }

  startEmitting() {
    this.interval = setInterval(() => {
      this.eventModel.eventId++;
      this.eventCreated.emit(this.eventModel);
    }, 1000);
  }

  stopEmitting() {
    clearInterval(this.interval);
  }
}
