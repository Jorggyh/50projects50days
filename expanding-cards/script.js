const panels = document.querySelectorAll('.panel')
// NodeList(5) [div.panel.active, div.panel, div.panel, div.panel, div.panel]

panels.forEach(panel => {
  panel.addEventListener('click', () => {
    removeActiveClasses()
    panel.classList.add('active')
  })
})

function removeActiveClasses() {
  panels.forEach(panel => {
    panel.classList.remove('active')
  })
}
