import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {
  serverId = btoa(Math.random().toFixed(2).toString().substr(2));
  serverStatus = 'online';

  ngOnInit() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }
}
