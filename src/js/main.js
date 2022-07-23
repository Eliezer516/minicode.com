import { htmleditor, csseditor, jseditor } from './editors.js'
import { $, $$ } from './lib/$.js'
import './fontsize.js'

window.addEventListener('DOMContentLoaded', function () {

  function actibeLblButton () {
    $$('.lbl-button').forEach((item) => item.classList.remove('active'))
    this.classList.add('active')
  }

  $$('.lbl-button').forEach((button) => {
    button.addEventListener('click', actibeLblButton)
  })

  $('#config_btn').addEventListener('click', function () {
    $('.modal-options_bg').classList.add('modal-options_bg-active')
  })

  $("#close-modal-btn").addEventListener("click", function () {
    $('.modal-options_bg').classList.remove('modal-options_bg-active')
  })

  function createHTML () {
    const html = htmleditor.getValue()
    const css = csseditor.getValue()
    const js = jseditor.getValue()

    return `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
          ${css}
        </style>
      </head>
      <body>
        ${html}
        <script>
          ${js}
        </script>
      </body>
      </html>
    `
  }

  function updatePreview () {
    const html = createHTML()
    $('iframe').setAttribute('srcdoc', html)
  }

  htmleditor.on('change', () => updatePreview())
  csseditor.on('change', () => updatePreview())
  jseditor.on('change', () => updatePreview())
})
