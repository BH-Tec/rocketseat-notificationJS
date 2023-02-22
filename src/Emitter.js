const Emitter = {
  events: {},

  on(event, callback) {
    Emitter.events[event] = Emitter.events[event] || []
    Emitter.events[event].push(callback)
  },

  emit(event, ...rest) {
    if(event in Emitter.events === false) {
      return;
    }

    Emitter.events[event].forEach((e) => {
      e( ...rest )
    })
    }
}

Emitter.emit('click')

export { Emitter }