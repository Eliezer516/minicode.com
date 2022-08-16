import { htmleditor, csseditor, jseditor } from './editors.js'
import { updatePreview } from './main.js'
import { $, $$ } from './lib/$.js'

// EDITOR

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

htmleditor.on('change', () => setEitorValueInLocalStorage())
csseditor.on('change', () => setEitorValueInLocalStorage())
jseditor.on('change', () => setEitorValueInLocalStorage())


// THEME

if (window.localStorage.getItem('theme')) {
  const theme = window.localStorage.getItem('theme')
  htmleditor.setOption('theme', theme)
  csseditor.setOption('theme', theme)
  jseditor.setOption('theme', theme)
  $('#theme').value = theme
}

$('#theme').addEventListener('change', function (e) {
  window.localStorage.setItem('theme', e.target.value)
})

// WORDWRAP
if (window.localStorage.getItem('wordwrap') === 'on') {
  htmleditor.setOption('lineWrapping', true)
  csseditor.setOption('lineWrapping', true)
  jseditor.setOption('lineWrapping', true)
} else {
  htmleditor.setOption('lineWrapping', false)
  csseditor.setOption('lineWrapping', false)
  jseditor.setOption('lineWrapping', false)
}

$('#wordwrap').addEventListener('change', (e) => {
  window.localStorage.setItem('wordwrap', e.target.value)
})

// FONTSIZE
if (window.localStorage.getItem('fontSize')) {
  $$('.CodeMirror').forEach((editor) => {
    editor.style.fontSize = `${window.localStorage.getItem('fontSize')}px`
  })
  $('#custom-fontsize').value = window.localStorage.getItem('fontSize')
}
