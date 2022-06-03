const left = document.querySelector('.left')
const right = document.querySelector('.right')
const constainer = document.querySelector('.container')

left.addEventListener('mouseenter', () =>
  constainer.classList.add('hover-left')
)

left.addEventListener('mouseleave', () =>
  constainer.classList.remove('hover-left')
)

right.addEventListener('mouseenter', () =>
  constainer.classList.add('hover-right')
)

right.addEventListener('mouseleave', () =>
  constainer.classList.remove('hover-right')
)
