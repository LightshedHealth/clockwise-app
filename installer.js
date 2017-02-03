var electronInstaller = require('electron-winstaller');

var resultPromise = electronInstaller.createWindowsInstaller({
  appDirectory: 'release/Clockwise.MD-win32-x64',
  outputDirectory: 'dist',
  authors: 'Lightshed Healthcare Technologies, LLC',
  exe: 'Clockwise.MD.exe',
  setupMsi: 'Clockwise.MD.msi',
  certificateFile: process.env.CERTIFICATE_FILE,
  certificatePassword: process.env.CERTIFICATE_PASSWORD
});

resultPromise.then(() => console.log("It worked!"), (e) => console.log(`No dice: ${e.message}`));
