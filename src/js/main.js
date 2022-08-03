import { htmleditor, csseditor, jseditor } from './editors.js'
import { $ } from './lib/$.js'
import './fontsize.js'
import './theme.js'
import './wordwrap.js'
import './lblbutons.js'

if (window.localStorage.getItem('editorValue')) {
  const { html, css, js } = JSON.parse(window.localStorage.getItem('editorValue'))  
  htmleditor.setOption('value', html)
  csseditor.setOption('value', css)
  jseditor.setOption('value', js)
  const storageHtml = `
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
  updatePreview(storageHtml)
}

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
      <script type="mudule">
        ${js}
      </script>
    </body>
    </html>
  `
}

function updatePreview (storageHtml) {
  if (storageHtml) {
    $('iframe').setAttribute('srcdoc', storageHtml)
  }

  const html = createHTML()
  $('iframe').setAttribute('srcdoc', '')
  $('iframe').setAttribute('srcdoc', html)
}

function setEitorValueInLocalStorage () {
  const html = htmleditor.getValue()
  const css = csseditor.getValue()
  const js = jseditor.getValue()
  const editorValue = {
    html,
    css,
    js
  }
  window.localStorage.setItem('editorValue', JSON.stringify(editorValue))
}

$('#previewBtn').onclick = () => {
  updatePreview()
}

htmleditor.on('change', () => setEitorValueInLocalStorage())
csseditor.on('change', () => setEitorValueInLocalStorage())
jseditor.on('change', () => setEitorValueInLocalStorage())
