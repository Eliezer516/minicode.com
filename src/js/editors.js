import CodeMirror from 'codemirror/lib/codemirror.js'
import 'codemirror/lib/codemirror.css'

// THEMES
import './lib/themes.js'

// MODES
import 'codemirror/mode/xml/xml.js'
import 'codemirror/mode/css/css.js'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/mode/htmlmixed/htmlmixed.js'

// ADDONS
import 'codemirror/addon/edit/closebrackets.js'
import 'codemirror/addon/edit/closetag.js'
import 'codemirror/addon/edit/matchbrackets.js'
import 'codemirror/addon/scroll/simplescrollbars.js'
import 'codemirror/addon/scroll/simplescrollbars.css'
import 'codemirror/addon/fold/brace-fold.js'
import 'codemirror/addon/fold/foldgutter.js'
import 'codemirror/addon/fold/foldgutter.css'
import 'codemirror/addon/comment/comment.js'

import 'codemirror/addon/hint/show-hint.js'
import 'codemirror/addon/hint/show-hint.css'
import 'codemirror/addon/hint/css-hint.js'
import 'codemirror/addon/hint/javascript-hint.js'

// EMMET
import emmet from '@emmetio/codemirror-plugin'
emmet(CodeMirror)

// Global options for all editors
const editorOptions = {
  lineNumbers: true,
  autoCloseBrackets: true,
  autoCloseTags: true,
  matchBrackets: true,
  scrollbarStyle: 'simple',
  lineWrapping: true,
  foldGutter: true,
  gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
  extraKeys: {
    'Ctrl-M': 'toggleComment',
    'Ctrl-Space': 'autocomplete',
  },
  emmet: {
    preview: true,
    autoRenameTags: true,
    markTagPairs: true,
  }
}

const htmleditor = CodeMirror(document.getElementById('htmleditor'), {
  mode: 'htmlmixed',
  ...editorOptions,
  extraKeys: {
    'Tab': 'emmetExpandAbbreviation',
    'Esc': 'emmetResetAbbreviation',
    'Enter': 'emmetInsertLineBreak',
    'Ctrl-Space': 'emmetCaptureAbbreviation',
  },
})

const csseditor = CodeMirror(document.getElementById('csseditor'), {
  mode: 'css',
  ...editorOptions,
  extraKeys: {
    'Tab': 'emmetExpandAbbreviation',
    'Esc': 'emmetResetAbbreviation',
    'Enter': 'emmetInsertLineBreak',
  },
})

const jseditor = CodeMirror(document.getElementById('javascripteditor'), {
  mode: 'javascript',
  ...editorOptions,
})

htmleditor.setSize('100%', '100%')
csseditor.setSize('100%', '100%')
jseditor.setSize('100%', '100%')

export {
  htmleditor,
  csseditor,
  jseditor
}
