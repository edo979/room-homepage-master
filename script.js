const sliderImgEl = document.querySelector('.hero_img'),
  sliderTextContentEl = document.querySelector('.hero_text-content'),
  leftBtn = document.getElementById('slider_left'),
  rightBtn = document.getElementById('slider_right'),
  sliderContent = [
    {
      imgUrl: 'url(../images/mobile-image-hero-1.jpg)',
      textContent: {
        title: 'Discover innovative ways to decorate',
        text: `We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.`,
      },
    },
  ]

let currentSlide = 1

rightBtn.addEventListener('click', (e) => {
  currentSlide++

  if (currentSlide > 3) {
    currentSlide = 1
  }
  console.log(currentSlide)
  updateSlider()
})

function updateSlider() {
  changeImg()
}

function getImgUrl() {
  const imgStyle =
    sliderImgEl.currentStyle || window.getComputedStyle(sliderImgEl, false)
  const imgUrl = imgStyle.backgroundImage

  return imgUrl
}

function changeImg() {
  const url = getImgUrl(),
    lastDashIndex = url.lastIndexOf('-'),
    lastDotIndex = url.lastIndexOf('.')
}
