import { createApp } from 'vue';
import App from './App.vue';
import './assets/tailwind.css';

createApp(App).mount('#app');

var myPythonScriptPath =
  'C:/Workspaces/tailwindcss_vue_electron/src/python/hello.py';

// Use python shell
const { PythonShell } = require('python-shell');
var pyshell = new PythonShell(myPythonScriptPath);

pyshell.on('message', function(message) {
  // received a message sent from the Python script (a simple "print" statement)
  console.log(message);
});

// end the input stream and allow the process to exit
pyshell.end(function(err) {
  if (err) {
    throw err;
  }

  console.log('finished');
});

console.log(__dirname);
