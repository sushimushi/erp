// main.js
const { app, BrowserWindow } = require("electron");
const path = require("path");

let mainWindow;

async function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  const isDev = await import("electron-is-dev");

  const url = isDev
    ? "http://localhost:3000" // Use your React development server URL
    : `file://${path.join(__dirname, "../build/index.html")}`;

  mainWindow.loadURL(url);

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
