const { Tray } = require('electron')
const { resolve } = require('path')

const iconPath = resolve(__dirname, '../', 'assets', 'agua.png')

function createTray() {
  const tray = new Tray(iconPath)
  tray.setToolTip('Lembrete para beber água')

  return tray
}

module.exports = createTray()