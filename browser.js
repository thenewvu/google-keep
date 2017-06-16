const webview = document.querySelector('#webview')

webview.addEventListener('loadstop', () => {
  webview.insertCSS({
    file: 'webview.css'
  })
})
