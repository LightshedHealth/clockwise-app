import { app, BrowserWindow, crashReporter, Menu, ipcMain } from 'electron';
import appMenu from './browser/menu/app-menu';
import setTrayMenu from './browser/tray/app-tray';

let mainWindow = null;
let preferencesWindow = null;
let preferencesReader = null;
let tray = null;

if (process.env.NODE_ENV === 'develop') {
  crashReporter.start();
}

app.on('ready', () => {
  Menu.setApplicationMenu(appMenu);
  let preferencesOpts = {
    width: 300,
    height: 300,
    icon: `${__dirname}/resources/logo.png`
  };
  let mainOpts = {
    width: 1024,
    height: 768,
    icon: `${__dirname}/resources/logo.png`
  };
  mainWindow = new BrowserWindow(mainOpts);
  mainWindow.on('close', (e) => {
    e.preventDefault();
    mainWindow.hide();
  });
  mainWindow.hide();

  preferencesWindow = new BrowserWindow(preferencesOpts);
  preferencesWindow.on('close', (e) => {
    e.preventDefault();
    preferencesWindow.hide();
  });
  preferencesWindow.hide();

  preferencesReader = new BrowserWindow(preferencesOpts);
  preferencesReader.hide();
  preferencesReader.loadURL(`file://${__dirname}/renderer/reader.html`);
});

app.on('openWindow', () => {
  mainWindow.loadURL(`file://${__dirname}/renderer/index.html`);
  mainWindow.show();
});

app.on('openPreferences', () => {
  preferencesWindow.loadURL(`file://${__dirname}/renderer/preferences.html`);
  preferencesWindow.show();
});

app.on('showTrayIcon', (showTrayIcon) => {
  if (showTrayIcon && (tray == null)) {
    tray = setTrayMenu();
  } else if (!showTrayIcon && (tray != null)) {
    tray.destroy();
    tray = null;
  }
});

ipcMain.on('showTrayIcon', (e, showTrayIcon) => {
  app.emit('showTrayIcon', showTrayIcon);
});

ipcMain.on('readPreferences', (e, preferences) => {
  app.emit('showTrayIcon', preferences.showTrayIcon);

  if (preferences.facilityId == '' || preferences.facilityId == undefined) {
    app.emit('openPreferences');
  } else {
    app.emit('openWindow');
  }
});
