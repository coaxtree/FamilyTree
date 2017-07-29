import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as io from 'socket.io-client';
import { HomeService } from "app/pages/home/home.service";

export class ChatList {
  relationName: string;
  imgURL: string;
  message: number;
}

const CHATS: ChatList[] = [
  { relationName: 'Jai Kumar', imgURL: './assets/images/home/user1.jpg', message: 5 },
  { relationName: 'Mani Maran', imgURL: './assets/images/home/user2.jpg', message: 12 }
]


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {


  chatLists = CHATS;
  selectedChat: ChatList;

  currentMsg = '';
  show:boolean;
  messageText: string;
  messages: Array<any>;


  constructor(private _socketService: HomeService, ) { }

  ngOnInit() {
    this.messages = new Array();
    this._socketService.on('message-received', (msg: any) => {
      this.messages.push(msg);
    });
  }

  sendMessage() {
    const message = {
      text: this.messageText,
      date: Date.now()
    };
    this._socketService.emit('send-message', message);
    this.messageText = '';
  }

  onSelect(ch: ChatList): void {
    this.selectedChat = ch;
    this.show=true;
  }

  onClose(ch: ChatList){
    this.selectedChat=ch;
  }
  
}
