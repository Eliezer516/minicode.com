import { $, $$ } from './lib/$.js'

// import { htmleditor } from './editors.js'
const codeMirrorElement = window.getComputedStyle($('.CodeMirror'))
const editors = $$('.CodeMirror')
let currentFontSize = parseInt(codeMirrorElement.getPropertyValue('font-size').replace('px', ''))

function increaseFontSize () {
  currentFontSize = currentFontSize + 1
  editors.forEach( editor => {
    editor.style.fontSize = `${currentFontSize}px`
  })
  $('#custom-fontsize').value = currentFontSize  
  
  // console.log(editors)
}

function decreaseFontSize () {
  currentFontSize = currentFontSize - 1
  editors.forEach( editor => {
    editor.style.fontSize = `${currentFontSize}px`
  })
  $('#custom-fontsize').value = currentFontSize
}

function customFontSize () {
  let fontSize = parseInt($('#custom-fontsize').value)

  if (isNaN(fontSize)) {
    fontSize = 16
  }
  
  currentFontSize = fontSize
  
  editors.forEach( editor => {
    $('.CodeMirror').style.fontSize = `${currentFontSize}px`
  })
}

$('#increase-fontsize').addEventListener('click', function () {
  increaseFontSize()
})

$('#decrease-fontsize').addEventListener('click', function () {
  decreaseFontSize()
})

$('#custom-fontsize').addEventListener('keyup', function () {
  customFontSize()
})
