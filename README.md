## Introduction

This is a CRUD = {Create, Read, Update, Delete} Application created with use of es7 Javascript, Babel and Webpack. 

## Live Demo
https://rehaan-notes-app.netlify.com

![1234](https://user-images.githubusercontent.com/20107730/63019848-224a4d00-beba-11e9-8aaa-ecc7c9764006.png)

## Youtube Video
[![Watch the video](https://img.youtube.com/vi/8xLYYcbpHww/hqdefault.jpg)](https://www.youtube.com/watch?v=8xLYYcbpHww&feature=youtu.be)

## Installation
This command will install all the npm_modules.
```bash
npm install
```
## Running In Local Machine
```bash
npm run dev-server
```

## Libraries Used
```bash
{
  "name": "boilerplate",
  "version": "1.0.0",
  "description": "",
  "main": "input.js",
  "scripts": {
    "dev-server": "webpack-dev-server --mode development",
    "build": "webpack --mode production"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "babel-cli": "^6.26.0",
    "babel-loader": "^7.1.5",
    "babel-polyfill": "^6.26.0",
    "babel-preset-env": "^1.7.0",
    "live-server": "^1.2.1",
    "moment": "^2.22.2",
    "uuid": "^3.2.1",
    "webpack": "^4.39.1",
    "webpack-cli": "^3.3.6",
    "webpack-dev-server": "^3.8.0"
  }
}

```

## Important
-> If you perform any changes in the src/ directory, make sure to run
```bash
npm run build
```
This will generate two bundle.js[index.js &amp; edit.js] file in public/scripts .

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
