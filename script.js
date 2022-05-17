const imageEls = document.querySelectorAll('.hero_img'),
  textContentEls = document.querySelectorAll('.hero_text-content'),
  leftBtn = document.getElementById('slider_left'),
  rightBtn = document.getElementById('slider_right'),
  slidesTotal = imageEls.length,
  navTogglerEl = document.querySelector('.main-nav_toggle'),
  navListEl = document.querySelector('.main-nav_list')

// Slider
let currentSlide = 1

rightBtn.addEventListener('click', (e) => {
  toggleHidden()
  currentSlide++

  if (currentSlide > slidesTotal) {
    currentSlide = 1
  }
  toggleHidden()
})

leftBtn.addEventListener('click', (e) => {
  toggleHidden()
  currentSlide--

  if (currentSlide < 1) {
    currentSlide = slidesTotal
  }
  toggleHidden()
})

function toggleHidden() {
  const index = currentSlide - 1

  imageEls[index].classList.toggle('hidden')
  textContentEls[index].classList.toggle('hidden')
}

// Navigation
navTogglerEl.addEventListener('click', (e) =>
  navListEl.classList.toggle('expanded')
)
