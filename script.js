const sliderImgEl = document.querySelector('.hero_img'),
  sliderTextContentEl = document.querySelector('.hero_text-content'),
  leftBtn = document.getElementById('slider_left'),
  rightBtn = document.getElementById('slider_right')

let currentSlide = 1

rightBtn.addEventListener('click', (e) => {
  currentSlide++

  if (currentSlide > 3) {
    currentSlide = 1
  }
  console.log(currentSlide)
})
