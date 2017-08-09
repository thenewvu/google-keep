;(() => {
  const webview = document.getElementById('webview')
  const toolbar = document.getElementById('toolbar')
  const toolAppbar = document.getElementById('tool-appbar')

  webview.addEventListener('loadstop', () => {
    webview.insertCSS({ file: 'webview.css' })
    webview.setZoom(0.8)
    toggleAppbar()
    toggleTakeNode()
  })

  document.onkeydown = e => {
    if (e.ctrlKey) {
      toolbar.classList.toggle('visible')
    }
  }

  toolAppbar.onclick = e => {
    toggleAppbar()
    toggleTakeNode()
  }

  function toggleAppbar() {
    webview.executeScript({
      code: `
    document.querySelector('#ognwrapper')
      .classList.toggle('invisible')
    `
    })
  }

  function toggleTakeNode() {
    webview.executeScript({
      code: `
    document.querySelector(
      '.notes-container div:nth-child(2) div:nth-child(2)')
      .classList.toggle('invisible')
    `
    })
  }
})()
