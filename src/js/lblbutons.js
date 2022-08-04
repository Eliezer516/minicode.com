import { $, $$ } from './lib/$.js'

function actibeLblButton () {
  $$('.lbl-button').forEach((item) => item.classList.remove('active'))
  this.classList.add('active')
}

$$('.lbl-button').forEach((button) => {
  button.addEventListener('click', actibeLblButton)
})
