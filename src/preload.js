const {contextBridge, ipcRenderer} = require("electron");

contextBridge.exposeInMainWorld("api", {
  windowCloseButton: () => ipcRenderer.send("window-close"),
  windowMinimizeButton: () => ipcRenderer.send("window-minimize"),
  windowMaximizeButton: () => ipcRenderer.send("window-maximize"),
});
