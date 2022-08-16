import { $, $$ } from './lib/$.js'
import { htmleditor, csseditor, jseditor } from './editors'

let currentEditorTheme = window.localStorage.getItem('theme')

$('#theme').addEventListener('change', function (e) {
  htmleditor.setOption('theme', e.target.value)
  csseditor.setOption('theme', e.target.value)
  jseditor.setOption('theme', e.target.value)
  if ($('.emmet-abbreviation-preview .CodeMirror')) {
    $('.emmet-abbreviation-preview .CodeMirror').classList.replace(`cm-s-${currentEditorTheme}`, `cm-s-${e.target.value}`)
  }
  currentEditorTheme = e.target.value
})

htmleditor.on('cursorActivity', () => {
  htmleditor.execCommand('emmetCaptureAbbreviation')
  
  if ($('.emmet-abbreviation-preview .CodeMirror')) {
    $('.emmet-abbreviation-preview .CodeMirror').classList.replace('cm-s-default', `cm-s-${currentEditorTheme}`)
  }
})

csseditor.on('cursorActivity', () => {
  csseditor.execCommand('emmetCaptureAbbreviation')
  
  if ($('.emmet-abbreviation-preview .CodeMirror')) {
    $('.emmet-abbreviation-preview .CodeMirror').classList.replace('cm-s-default', `cm-s-${currentEditorTheme}`)
  }
})

