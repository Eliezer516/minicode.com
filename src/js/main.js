import { htmleditor, csseditor, jseditor } from './editors.js'
import { $ } from './lib/$.js'
import './fontsize.js'
import './theme.js'
import './wordwrap.js'
import './lblbutons.js'
import './localstorage.js'

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

export function updatePreview (storageHtml) {
  if (storageHtml) {
    $('iframe').setAttribute('srcdoc', storageHtml)
  }

  const html = createHTML()
  $('iframe').setAttribute('srcdoc', html)
}

$('#previewBtn').onclick = () => {
  updatePreview()
}
