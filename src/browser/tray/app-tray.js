import { app, Menu, Tray } from 'electron';
import path from 'path';

function setTrayMenu() {
  let iconPath = path.join(__dirname, '../../../src/assets/icons/clockwise_16x16.png');
  let tray = new Tray(iconPath);

  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Open Window',
      click(e) {
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

export default setTrayMenu
