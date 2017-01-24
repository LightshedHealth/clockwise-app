# Clockwise.MD Web Application in a box

## Getting started

```bash
npm install
npm start
```

## Build distributable release for all platforms

```bash
npm run-script clean
npm run-script package
```

## Windows Installer

In Windows:

```bash
# npm run-script installer
set DEBUG=electron-windows-installer:main
del dist\*
node installer.js
```
