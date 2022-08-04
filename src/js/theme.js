import { $ } from './lib/$.js'
import { htmleditor, csseditor, jseditor } from './editors'

$('#theme').addEventListener('change', function (e) {
  htmleditor.setOption('theme', e.target.value)
  csseditor.setOption('theme', e.target.value)
  jseditor.setOption('theme', e.target.value)
})
