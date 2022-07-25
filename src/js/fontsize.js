import { $, $$ } from './lib/$.js'

// import { htmleditor } from './editors.js'
const codeMirrorElement = window.getComputedStyle($('.CodeMirror'))
const editors = $$('.CodeMirror')
let currentFontSize = parseInt(codeMirrorElement.getPropertyValue('font-size').replace('px', ''))

$('#custom-fontsize').value = currentFontSize

function increaseFontSize () {
  currentFontSize = currentFontSize + 1
  editors.forEach((editor) => {
    editor.style.fontSize = `${currentFontSize}px`
  })
  $('#custom-fontsize').value = currentFontSize
}

function decreaseFontSize () {
  currentFontSize = currentFontSize - 1
  editors.forEach((editor) => {
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
  editors.forEach((editor) => {
<<<<<<< HEAD
    editor.style.fontSize = `${currentFontSize}px`
  })
}

function resetFontSize () {
  currentFontSize = 16
  editors.forEach((editor) => {
    editor.style.fontSize = `${currentFontSize}px`
=======
    $('.CodeMirror').style.fontSize = `${currentFontSize}px`
>>>>>>> 5b4317399bc0d8e5de919d7504bef453bba6be2b
  })
  
  $('#custom-fontsize').value = currentFontSize
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

$('#reset-fontsize').addEventListener('click', function () {
  resetFontSize()
})

