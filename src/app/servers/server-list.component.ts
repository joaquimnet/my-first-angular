import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.css'],
})
export class ServerListComponent implements OnInit {
  allowNewServer = true;
  serverName = '';
  showFeedback = false;
  servers: {
    serverId: string;
    serverStatus: 'online' | 'offline';
    serverName: string;
  }[] = [];

  // constructor() {
  //   setTimeout(() => (this.allowNewServer = true), 3000);
  // }

  ngOnInit(): void {}

  onCreateServer(name: string) {
    console.log(`Creating server ${name}`);
    this.showFeedback = true;
    this.servers.push({
      serverId: btoa(Math.random().toFixed(2).toString().substr(2)),
      serverStatus: 'online',
      serverName: name,
    });
    setTimeout(() => (this.showFeedback = false), 3000);
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
