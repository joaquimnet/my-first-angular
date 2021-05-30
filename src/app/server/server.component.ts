import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [
    `
      .online {
        color: #215f17;
      }

      .offline {
        color: #6f1b1b;
      }
    `,
  ],
})
export class ServerComponent {
  serverId = btoa(Math.random().toFixed(2).toString().substr(2));
  serverStatus = 'online';

  ngOnInit() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getColor() {
    return this.serverStatus === 'online'
      ? 'rgba(50,255,50,0.1)'
      : 'rgba(255,50,50,0.1)';
  }
}
