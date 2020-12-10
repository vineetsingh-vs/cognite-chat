import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges
} from "@angular/core";

import { Chat } from "@chat/chat-viewer/chat.model";

@Component({
  selector: "chats",
  templateUrl: "./chats.component.html",
  styleUrls: ["./chats.component.scss"]
})
export class ChatsComponent implements OnChanges {
  @Input()
  public chats: Chat[] = [];

  @Input()
  public activeIndex: number = 0;

  @Output()
  public selectedIndex = new EventEmitter<number>();

  public text: string = "";
  public filteredChats: Chat[];

  constructor() {}

  ngOnChanges() {
    this.filteredChats = this.chats;
  }

  public chatSelected(index: number): void {
    this.selectedIndex.emit(index);
  }

  public textChange() {
    this.filteredChats = this.chats;
    if (!!this.text) {
      this.filteredChats = (this.filteredChats || []).filter(chat =>
        (chat.friend || "")
          .toLocaleLowerCase()
          .includes(this.text.toLocaleLowerCase())
      );
    }
  }
}
