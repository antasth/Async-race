import pets from '../../data/pets.json' assert { type: 'json' }

// BURGER
const body = document.querySelector('body')
const burgerMenu = document.querySelector('.burger')
const burgerIcon = document.querySelector('.burger__icon')
const burgerMenuItem = document.querySelectorAll('.burger__list-item')
const burgerBackground = document.querySelector('.burger__background')

// if click on burger icon => show or hide burger menu and rotate icon
burgerIcon.addEventListener('click', () => {
  // if scroll is hidden => add margin right
  let marginSize = window.innerWidth - document.documentElement.clientWidth
  if (marginSize) {
    document.documentElement.style.marginRight = marginSize + 'px'
  } else {
    document.documentElement.style.marginRight = 0
  }

  body.classList.toggle('locked')
  burgerMenu.classList.toggle('burger__active')
  burgerIcon.classList.toggle('burger__icon-active')
  burgerBackground.classList.toggle('burger__background-active')
})

// if click on burger link => hide burger menu
burgerMenuItem.forEach((item) => {
  item.addEventListener('click', () => {
    hideBurger()
  })
})

// if click on burger background => hide burger menu
burgerBackground.addEventListener('click', () => {
  hideBurger()
})

window.addEventListener('resize', () => {
  if (document.body.clientWidth > 767) {
    hideBurger()
  }
})

function hideBurger() {
  body.classList.remove('locked')
  burgerMenu.classList.remove('burger__active')
  burgerIcon.classList.remove('burger__icon-active')
  burgerBackground.classList.remove('burger__background-active')
  document.documentElement.style.marginRight = 0
}

// SLIDER

console.log(pets)

// get count of slides on page
window.addEventListener('resize', () => {
  let windowWidth = document.body.clientWidth
  const slidesOnPage = windowWidth > 1100 ? 3 : windowWidth < 768 ? 1 : 2
})


const createCard = () => {
  let card = document.createElement('div')
  card.classList.add('slider__card')

  card.innerHTML = `
  <div class="slider__card-img">
    <img src=${src} alt="pet" />
  </div>
  <div class="slider__card-name">${name}</div>
  <div class="slider__card-button">Learn more</div>
  `
}

