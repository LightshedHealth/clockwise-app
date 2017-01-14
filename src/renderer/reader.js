import { ipcRenderer } from 'electron';

let defaultPreferences = JSON.stringify({ showTrayIcon: true })
let preferences = JSON.parse(localStorage.getItem('preferences') || defaultPreferences)

ipcRenderer.send('readPreferences', preferences);
