var electronInstaller = require('electron-winstaller');

var resultPromise = electronInstaller.createWindowsInstaller({
  appDirectory: 'release/Clockwise.MD-win32-x64',
  outputDirectory: 'dist',
  authors: 'Lightshed Healthcare Technologies, LLC',
  exe: 'Clockwise.MD.exe',
  setupMsi: 'Clockwise.MD.msi'
});

resultPromise.then(() => console.log("It worked!"), (e) => console.log(`No dice: ${e.message}`));
