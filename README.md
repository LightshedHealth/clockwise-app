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
# for digitally signing the installer
set CERTIFICATE_FILE=filename.p12 # or filename.pfx
set CERTIFICATE_PASSWORD=password

# to create the installer
npm run-script installer
```
