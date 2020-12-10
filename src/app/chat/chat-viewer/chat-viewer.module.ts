import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ChatViewerRoutingModule } from '@chat/chat-viewer/chart-viewer-routing.module';
import { CoreModule } from '@core/core.module';

import { ChatViewerComponent } from '@chat/chat-viewer/chat-viewer.component';
import { ChatsComponent } from '@chat/chat-viewer/chats/chats.component';
import { ChatWindowComponent } from '@chat/chat-viewer/chat-window/chat-window.component';

const modules = [
  SharedModule,
  ChatViewerRoutingModule,
  CoreModule
];
const components = [
  ChatViewerComponent, 
  ChatsComponent, 
  ChatWindowComponent
]

@NgModule({
  declarations: [...components],
  imports: [
    ...modules
  ]
})
export class ChatViewerModule { }
