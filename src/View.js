const View = {
  render({minutes, seconds}) {
    document.body.innerHTML = `
    <p>Beba água em</p>
    <span>${minutes}:${seconds}</span>
    `;
  }
}

export { View };