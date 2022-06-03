const loadingText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

let int = setInterval(blurring, 30) // Every 30 milliseconds

function blurring() {
  load++

  if (load > 99) {
    clearInterval(int)
  }

  loadingText.innerText = `${load}%`
  loadingText.style.opacity = scale(load, 0, 100, 1, 0) // This will load from 0 to 100, while the opacity goes from 1 (total) to 0 (none).
  bg.style.filter = `blur(${scale(load, 0, 100, 3, 0)}rem)` // Start with 3rem of blur and goes to 0 blur.
}

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}
