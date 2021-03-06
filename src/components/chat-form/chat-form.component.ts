import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/services/chatService/chat.service';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.scss']
})
export class ChatFormComponent implements OnInit {
  message: string='';
  constructor(private chat:ChatService) { }

  ngOnInit() {
  }
  send() {
    // this.chat.sendMessage(this.message);
    // this.message = '';
  }

  handleSubmit(event:any) {
    if (event.keyCode === 13) {
      this.send();
    }
  }

}
