export interface Chat {
    friend: string;
    order:  number;
    chats?: Talk[]
}

interface Talk {
   owner: boolean;
   text: string;
}