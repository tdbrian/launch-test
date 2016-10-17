import { Component, OnInit } from '@angular/core';
import { SocketioService } from './shared/services/socketio.services';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {

  constructor(private socket: SocketioService) { }

  ngOnInit() {
  }
}
