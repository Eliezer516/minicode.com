import CodeMirror from 'codemirror/lib/codemirror.js'
import 'codemirror/lib/codemirror.css'

// THEMES
import './lib/themes.js'

// MODES
import 'codemirror/mode/xml/xml.js'
import 'codemirror/mode/css/css.js'
import 'codemirror/mode/javascript/javascript.js'

// ADDONS
import 'codemirror/addon/edit/closebrackets.js'
import 'codemirror/addon/edit/closetag.js'
import 'codemirror/addon/scroll/simplescrollbars.js'
import 'codemirror/addon/scroll/simplescrollbars.css'

// EMMET

import emmet from '@emmetio/codemirror-plugin'
emmet(CodeMirror);

const editorOptions = {
  lineNumbers: true,
  autoCloseBrackets: true,
  autoCloseTags: true,
  scrollbarStyle: 'simple',
  extraKeys: {
      'Tab': 'emmetExpandAbbreviation',
      'Esc': 'emmetResetAbbreviation',
      'Enter': 'emmetInsertLineBreak'
  }
}

const htmleditor = CodeMirror(document.getElementById('htmleditor'), {
  mode: 'xml',
  ...editorOptions
})

const csseditor = CodeMirror(document.getElementById('csseditor'), {
  mode: 'css',
  ...editorOptions
})

const jseditor = CodeMirror(document.getElementById('javascripteditor'), {
  mode: 'javascript',
  ...editorOptions
})

htmleditor.setSize('100%', '100%')
csseditor.setSize('100%', '100%')
jseditor.setSize('100%', '100%')

export {
  htmleditor,
  csseditor,
  jseditor
}
