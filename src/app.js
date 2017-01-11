import {app, BrowserWindow, crashReporter, Menu} from 'electron';
import appMenu from './browser/menu/app-menu';

let mainWindow = null;
if (process.env.NODE_ENV === 'develop') {
  crashReporter.start();
}

app.on('window-all-closed', () => {
  app.quit();
});

app.on('ready', () => {
  Menu.setApplicationMenu(appMenu);
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    icon: 'assets/icons/clockwise_512x512.png'
  });

  mainWindow.loadURL(`file://${__dirname}/renderer/index.html`);
});
