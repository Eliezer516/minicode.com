import fs from 'fs'

function init () {
  const themes = fs.readdirSync('node_modules/codemirror/theme')
  themes.forEach((theme) => {
    console.log(`
      <option value="${theme.replace('.css', '')}">${theme.charAt(0).toUpperCase() + theme.slice(1).replace('.css', '')}</option>
    `)
  })
}
// formatDate.charAt(0).toUpperCase() + formatDate.slice(1)
init()
