import { app, Menu, Tray } from 'electron';
import path from 'path';

function setTrayMenu() {
  let iconPath = path.join(__dirname, '../../../resources/tray.png');
  let tray = new Tray(iconPath);

  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Open Window',
      click() {
        app.emit('openWindow');
      }
    },
    {
      label: 'Preferences',
      click() {
        app.emit('openPreferences');
      }
    }
  ]);

  tray.setToolTip('ClockwiseMD');
  tray.setContextMenu(contextMenu);
  return tray;
}

export default setTrayMenu;
