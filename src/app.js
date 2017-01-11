import {app, BrowserWindow, crashReporter, Menu} from 'electron';
import appMenu from './browser/menu/app-menu';
import setTrayMenu from './browser/tray/app-tray';

let mainWindow = null;
let preferencesWindow = null;
let tray = null;

if (process.env.NODE_ENV === 'develop') {
  crashReporter.start();
}

app.on('ready', () => {
  tray = setTrayMenu();
  Menu.setApplicationMenu(appMenu);
  let preferencesOpts = {
    width: 300,
    height: 300,
    icon: 'assets/icons/clockwise_512x512.png'
  }
  let mainOpts = {
    width: 1024,
    height: 768,
    icon: 'assets/icons/clockwise_512x512.png'
  }
  mainWindow = new BrowserWindow(mainOpts);
  mainWindow.on('close', function(e) {
    e.preventDefault();
    mainWindow.hide();
  });

  preferencesWindow = new BrowserWindow(preferencesOpts);
  preferencesWindow.on('close', function(e) {
    e.preventDefault();
    preferencesWindow.hide();
  });

  mainWindow.hide()
  preferencesWindow.hide()
});

app.on('openWindow', () => {
  mainWindow.loadURL(`file://${__dirname}/renderer/index.html`);
  mainWindow.show()
});

app.on('openPreferences', () => {
  preferencesWindow.loadURL(`file://${__dirname}/renderer/preferences.html`);
  preferencesWindow.show()
});
