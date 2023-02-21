import { Notifyer } from "./Notifyer.js"

const App = {
  async start() {
    try {
      await Notifyer.init()
      Notifyer.notify({
        title: 'Hora do Post',
        body: 'Poste algo para ajudar a comunidade'
      })
      
    } catch(e) {
      console.log(e.message)
    }
  }
}

export { App }