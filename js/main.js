$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 2,
        margin: 32,
        loop: true,
        dots: false,
      },
      // breakpoint from 601 up
      601: {
        items: 3,
        margin: 32,
        dots: false,
        loop: true,
      },
      // breakpoint from 1001 up
      1001: {
        items: 3,
        margin: 48,
        dots: false,
        loop: true,
      },
    },
  })
})

// Video

const videoBtn = document.querySelector('#video-btn')
const videoPic = document.querySelector('.video__picture')
const videoWrapper = document.querySelector('.video')
const video = document.querySelector('#video-file')

videoWrapper.addEventListener('click', function () {
  if (video.paused) {
    videoPic.classList.add('hidden')
    videoWrapper.classList.remove('video-overlay')
    videoBtn.classList.add('none')
    video.play()
  } else {
    videoWrapper.classList.add('video-overlay')
    videoBtn.classList.remove('none')
    video.pause()
  }
})

// Burger

document.querySelector('.menu-icon-wrapper').onclick = function () {
  document.querySelector('.menu-icon').classList.toggle('menu-icon-active')
}

// menuMobile

const menuMobile = document.querySelector('#burger')
const mobMenu = document.querySelector('#mobileNav')

menuMobile.onclick = function () {
  mobMenu.classList.toggle('none')
  document.body.classList.toggle('no-scroll')
}
