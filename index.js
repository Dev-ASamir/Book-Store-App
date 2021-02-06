// console.log = function () {};
// console.info = function () {};
// console.warn = function () {};
console.error = function () {};
console.debug = function () {};
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => App);
