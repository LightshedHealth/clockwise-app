import {app, Menu} from 'electron';

let template = [{
  label: 'Clockwise.MD',
  submenu: [
    {
      label: 'Paste',
      accelerator: 'Command+V',
      click() {
        // TODO: Support pasting
        // const webview = app.document.getElementById('webview');
        // webview.paste();
      }
    },
    {
      label: 'Quit',
      accelerator: 'Command+Q',
      click() {
        app.quit();
      }
    }
  ]
}];

let appMenu = Menu.buildFromTemplate(template);

export default appMenu;
