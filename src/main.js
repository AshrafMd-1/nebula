const {app, BrowserWindow, BrowserView, ipcMain} = require("electron");
const path = require("node:path");

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  app.quit();
}

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 950,
    height: 600,
    minWidth: 600,
    minHeight: 400,
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      webviewTag: true,
    },
    autoHideMenuBar: true,
  });

  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    mainWindow.loadFile(
      path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`)
    );
  }


  mainWindow.setAlwaysOnTop(false, "screen");


  ipcMain.on("always-on-top", () => {
    mainWindow.setAlwaysOnTop(!mainWindow.isAlwaysOnTop(), "screen");
  });
};


app.whenReady().then(() => {
  createWindow();


  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

ipcMain.on("new-tab", () => {
  createWindow();
});

ipcMain.on('window-close', () => {
  const activeWindow = BrowserWindow.getFocusedWindow();
  if (activeWindow) {
    activeWindow.close();
  }
});

ipcMain.on('window-minimize', () => {
  const activeWindow = BrowserWindow.getFocusedWindow();
  if (activeWindow) {
    activeWindow.minimize();
  }
});

ipcMain.on('window-maximize', () => {
  const activeWindow = BrowserWindow.getFocusedWindow();
  if (activeWindow) {
    if (activeWindow.isMaximized()) {
      activeWindow.unmaximize();
    } else {
      activeWindow.maximize();
    }
  }
});

