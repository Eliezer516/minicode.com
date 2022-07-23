import { $ } from './lib/$.js'

// import { htmleditor } from './editors.js'
const codeMirrorElement = window.getComputedStyle($('.CodeMirror'))
let currentFontSize = parseInt(codeMirrorElement.getPropertyValue('font-size').replace('px', ''))

function increaseFontSize () {
  currentFontSize = currentFontSize + 1
  $('.CodeMirror').style.fontSize = `${currentFontSize}px`
  $('#custom-fontsize').value = currentFontSize
}

function decreaseFontSize () {
  currentFontSize = currentFontSize - 1
  $('.CodeMirror').style.fontSize = `${currentFontSize}px`
  $('#custom-fontsize').value = currentFontSize
}

function customFontSize () {
  let fontSize = parseInt($('#custom-fontsize').value)

  if (isNaN(fontSize) || fontSize < 5) {
    fontSize = 16
  }
  currentFontSize = fontSize
  $('.CodeMirror').style.fontSize = `${currentFontSize}px`
}

$('#increase-fontsize').addEventListener('click', function () {
  increaseFontSize()
  console.log()
})

$('#decrease-fontsize').addEventListener('click', function () {
  decreaseFontSize()
})

$('#custom-fontsize').addEventListener('keyup', function () {
  customFontSize()
})
