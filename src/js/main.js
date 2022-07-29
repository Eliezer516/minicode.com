import { htmleditor, csseditor, jseditor } from './editors.js'
import { $ } from './lib/$.js'
import './fontsize.js'
import './theme.js'
import './lblbutons.js'

$("#wordwrap").addEventListener("change", (e) => {
  console.log(e)
})

if(window.localStorage.getItem('editorValue')) {
  let { html, css, js } = JSON.parse(window.localStorage.getItem('editorValue'))
  
  htmleditor.setOption('value', html)
  csseditor.setOption('value', css)
  jseditor.setOption('value', js)
  
  let storageHtml = `
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
  let html = htmleditor.getValue()
  let css = csseditor.getValue()
  let js = jseditor.getValue()
  
  let editorValue = {
    html,
    css,
    js
  }
  
  window.localStorage.setItem('editorValue', JSON.stringify(editorValue))

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

function updatePreview (storageHtml) {
  if(storageHtml) {
    setTimeout(() => {
      $('iframe').setAttribute('srcdoc', storageHtml)
    }, 500)
  }
  setTimeout(() => {
    const html = createHTML()
    $('iframe').setAttribute('srcdoc', html)
  }, 500)
}

htmleditor.on('change', () => updatePreview())
csseditor.on('change', () => updatePreview())
jseditor.on('change', () => updatePreview())
