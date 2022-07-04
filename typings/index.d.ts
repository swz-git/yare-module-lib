// Server side
declare const channels: channelsAPI;

class Channel {
  id: string;
  send(msg: any): void;
}

interface channelsAPI {
  get(id: string): Channel;
  recv(id: string): any[];
}

// Client side
declare function sendData(id: string, msg: any);
