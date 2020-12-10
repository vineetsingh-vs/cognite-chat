import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatViewerComponent } from '@chat/chat-viewer/chat-viewer.component';

const routes: Routes = [{ path: '', component: ChatViewerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatViewerRoutingModule {}
