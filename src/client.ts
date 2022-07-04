export function injectHtml(
  html: string,
  position: InsertPosition = "beforeend",
  element: Element = document.body
) {
  element.insertAdjacentHTML(position, html);
}

let lastdata: Record<string, any[]> = {};
let callList: Record<string, ((msgList: any[]) => any)[]> = {};
document.addEventListener("chan", (e) => {
  // @ts-ignore it exists
  lastdata = e.detail;

  for (let channel of Object.keys(lastdata)) {
    if (callList[channel] == null) continue;
    for (let toCall of callList[channel]) {
      try {
        toCall(lastdata[channel]);
      } catch (e) {
        console.error(e);
      }
    }
  }
});

let channelsapi = {
  read(id: string): any[] {
    return lastdata[id];
  },
  send(id: string, msg: any): void {
    return channels.get(id).send(msg);
  },
  addEventListener(id: string, func: (msgList: any[]) => any) {
    if (callList[id] == null) {
      callList[id] = [];
    }
    callList[id].push(func);
  },
};

export { channelsapi as channels };
