;(() => {
  const webview = document.getElementById('webview')
  const toolbar = document.getElementById('toolbar')
  const toolAppbar = document.getElementById('tool-appbar')

  webview.addEventListener('loadstop', () => {
    webview.insertCSS({ file: 'webview.css' })
    webview.setZoom(0.8)
    toggleAppbar()
  })

  document.onkeydown = e => {
    if (e.ctrlKey) {
      toolbar.classList.toggle('visible')
    }
  }

  toolAppbar.onclick = e => {
    toggleAppbar()
  }

  function toggleAppbar() {
    webview.executeScript({
      code: `
    document.getElementById('ognwrapper')
      .classList.toggle('invisible')
    `
    })
  }
})()
