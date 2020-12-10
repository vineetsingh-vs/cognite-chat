import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChatRoutingModule } from '@chat/chat-routing.module';

import { ChatComponent } from '@chat/chat.component';

const modules = [
  BrowserModule,
  BrowserAnimationsModule,
  ChatRoutingModule
];

@NgModule({
  declarations: [ChatComponent],
  imports: [
    ...modules
  ],
  bootstrap: [ChatComponent]
})
export class ChatModule { }

