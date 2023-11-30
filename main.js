
const path = require('path');
const {app, BrowserWindow}= require('electron');

function createMainWindow(){
 const mainWindow = new BrowserWindow({
    title: 'Pacspa',
    show:false,
    icon:'pac.ico',
    minWidth: 1000,
    minHeight: 400,
 });

 mainWindow.maximize()
 mainWindow.show()

 mainWindow.loadFile(path.join(__dirname,'./renderer/index.html'));
}

app.whenReady().then(()=>{
   createMainWindow();
})