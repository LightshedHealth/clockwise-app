import {app, BrowserWindow, crashReporter, Menu} from 'electron';
import appMenu from './browser/menu/app-menu';
import setTrayMenu from './browser/tray/app-tray';

let mainWindow = null;
let tray = null;

if (process.env.NODE_ENV === 'develop') {
  crashReporter.start();
}

app.on('window-all-closed', () => {
  app.quit();
});

app.on('ready', () => {
  tray = setTrayMenu();
  Menu.setApplicationMenu(appMenu);
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    icon: 'assets/icons/clockwise_512x512.png'
  });

  mainWindow.loadURL(`file://${__dirname}/renderer/index.html`);
});
