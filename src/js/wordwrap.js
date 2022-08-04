import { $ } from './lib/$.js'
import { htmleditor, csseditor, jseditor } from './editors.js'

$('#wordwrap').addEventListener('change', (e) => {
  const OnOff = e.target.value
  if (OnOff === 'on') {
    htmleditor.setOption('lineWrapping', true)
    csseditor.setOption('lineWrapping', true)
    jseditor.setOption('lineWrapping', true)
  } else {
    htmleditor.setOption('lineWrapping', false)
    csseditor.setOption('lineWrapping', false)
    jseditor.setOption('lineWrapping', false)
  }

})
