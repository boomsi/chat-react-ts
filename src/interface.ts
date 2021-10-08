// export interface IGroup {
//   name: string;
//   id: string;
//   unread_count: number;
//   avatar: string;
//   group: {
//     count: number;
//     list: IMember[];
//   };
// }

export interface IMember<T> {
  id: string;
  name: string;
  avatar: string;
  last_speak_time: Date;
  message: T[];
  unread_count: number,
}

export interface IMessage {
  id: string;
  time: Date;
  content: string;
  create_user: string;
  recive_user: string;
  read: boolean;
}

export interface IMessageList {
  count: number;
  list: IMessage[];
}
