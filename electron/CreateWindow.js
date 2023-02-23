const { BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 300,
    height: 300,
    show: false,
    // frame: false,
    resizable: false,
    fullscreenable: false,
  })

  win.loadFile('index.html')

  // blur da janela
  win.on('blur', () => {
    win.hide()
  })

  return win
}

module.exports = createWindow()