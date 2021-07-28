const { app, BrowserWindow } = require('electron')
const path = require('path')
const express = require('express')

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        icon: __dirname + './weatherLogo.png',
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true
        },
        center: true,
        focusable: true,
        resizable: false,
        backgroundColor: '#363636',
    })
    
    const serve = express()
    serve.use(express.static(path.join(__dirname, '../build')))
    serve.get('/', (request, response) => {
        response.sendFile(path.join(__dirname, '../build', 'index.html'))
    })
    serve.listen(9000)

    mainWindow.loadURL('http://localhost:9000')

    mainWindow.setMenuBarVisibility(false)
}
//launch
app.whenReady().then(() => {
    createWindow()//usual create
    app.on('activate', function () {//macOS craete window
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', function () {//macOS close app
    if (process.platform !== 'darwin') app.quit()
})