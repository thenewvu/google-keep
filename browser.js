const webview = document.getElementById('webview')
const toolbar = document.getElementById('toolbar')
const toolSidebar = document.getElementById('tool-sidebar')

webview.addEventListener('loadstop', () => {
  webview.insertCSS({
    file: 'webview.css'
  })
  webview.setZoom(0.8)
})

document.onkeydown = e => {
  if (e.ctrlKey) {
    toolbar.classList.toggle('visible')
  }
}

toolSidebar.onclick = e => {
  webview.executeScript({
    code:
      "document.getElementById('ognwrapper').classList.toggle('invisible')"
  })
}
