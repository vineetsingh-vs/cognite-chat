import { Component, OnInit } from "@angular/core";
import { CoreHttpService } from "@core/services/core-http.service";
import { Chat } from "./chat.model";

@Component({
  selector: "chat-viewer",
  templateUrl: "./chat-viewer.component.html",
  styleUrls: ["./chat-viewer.component.scss"]
})
export class ChatViewerComponent implements OnInit {
  public chats: Chat[];
  public activeIndex: number = 0;
  constructor(private coreHttp: CoreHttpService) {}

  ngOnInit() {
    this.coreHttp
      .getData("assets/model/chats.json")
      .subscribe((chats: Chat[]) => {
        this.chats = (chats || []).map((chat, index) => ({
          ...chat,
          order: index
        }));
      });
  }

  public reShuffleChats(index: number) {
    const chat = this.chats[index];
    this.chats.splice(index, 1);
    this.chats.splice(0, 0, chat);
    this.chats = this.chats.map((chatter, index) => ({ ...chatter, order: index }));
    this.activeIndex = 0;
  }
}
