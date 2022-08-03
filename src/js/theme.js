import { $ } from './lib/$.js'
import { htmleditor, csseditor, jseditor } from './editors'

if (window.localStorage.getItem('theme')) {
  const theme = window.localStorage.getItem('theme')
  htmleditor.setOption('theme', theme)
  csseditor.setOption('theme', theme)
  jseditor.setOption('theme', theme)
  $('#theme').value = theme
}

$('#theme').addEventListener('change', function (e) {
  htmleditor.setOption('theme', e.target.value)
  csseditor.setOption('theme', e.target.value)
  jseditor.setOption('theme', e.target.value)
  window.localStorage.setItem('theme', e.target.value)
})
