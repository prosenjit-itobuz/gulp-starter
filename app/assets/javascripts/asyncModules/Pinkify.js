export default class Pinkify {
  constructor(el) {
    this.el = el
    this.doit()
  }

  doit() {
    this.el.style.backgroundColor = '#ff6bae'
    this.el.style.color = '#fff'
  }
}
