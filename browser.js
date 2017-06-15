let webview = null
let committed = false

window.addEventListener('load', () => {
  webview = document.querySelector('#webview')

  webview.addEventListener('loadcommit', () => {
    committed = true
  })
  webview.addEventListener('loadstop', () => {
    if (committed) {
      webview.insertCSS({ file: 'webview.css' })
      committed = false
    }
  })
})
