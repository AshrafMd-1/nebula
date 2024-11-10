const {contextBridge, ipcRenderer} = require("electron");

contextBridge.exposeInMainWorld("windowFunctions", {
  windowCloseButton: () => ipcRenderer.send("window-close"),
  windowMinimizeButton: () => ipcRenderer.send("window-minimize"),
  windowMaximizeButton: () => ipcRenderer.send("window-maximize"),
});

contextBridge.exposeInMainWorld("browserFunctions", {
  newTab: () => ipcRenderer.send("new-tab"),
  toggleAlwaysOnTop: () => ipcRenderer.send("always-on-top"),
});


contextBridge.exposeInMainWorld("specialFunctions", {
  toggleAlwaysOnTop: () => ipcRenderer.send("always-on-top"),
});
