import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Chat } from '../chat.model';

@Component({
  selector: 'chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnChanges {

  @Input()
  public chat: Chat;

  @Output()
  public activeChatIndex = new EventEmitter<number>();

  public text: string;

  constructor() { }

  ngOnChanges() {
  }

  public onTextChange() {
    if(!this.chat.chats) {
      this.chat.chats = [];
    }
    this.chat.chats = [...this.chat.chats, {owner: true, text: this.text}];
    this.text = '';
    setTimeout(() => this.chat.chats = [...this.chat.chats, {owner: false, text: 'Yeah'}], 1000);
    this.activeChatIndex.emit(this.chat.order);
  }

}
