import {Component} from '@angular/core';
import {EventModel} from './event.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'TestServer', content: 'Just a test'}];
  oddEvents: EventModel[] = [];
  evenEvents: EventModel[] = [];

  onServerAdded(serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(bluePrintData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintData.serverName,
      content: bluePrintData.serverContent
    });
  }


  onEventCreated(eventModel: EventModel) {
    if ((eventModel.eventId / 2) === 0) {
      this.oddEvents.push(eventModel);
    }else{
      this.evenEvents.push(eventModel);
    }

    console.log(eventModel);
  }
}
