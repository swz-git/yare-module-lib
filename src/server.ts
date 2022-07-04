let channelsapi = {
  read(id: string): any[] {
    return channels.recv(id);
  },
  send(id: string, msg: any): void {
    return channels.get(id).send(msg);
  },
};

export { channelsapi as channels };
