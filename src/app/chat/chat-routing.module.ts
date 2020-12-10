import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
        path: 'chat',
        loadChildren:  () => import('@chat/chat-viewer/chat-viewer.module').then(mod => mod.ChatViewerModule)
      },
      {
        path: '',
        redirectTo: 'chat',
        pathMatch: 'full'
      }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class ChatRoutingModule { }
