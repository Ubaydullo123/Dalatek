const numLvl1 = document.querySelector('.intro__block-num_one')
const numLvl2 = document.querySelector('.intro__block-num_two')
const numLvl3 = document.querySelector('.intro__block-num_three')

function lvl() {
  let time = 200
  numLvl1.innerHTML++
  let prevLvl = numLvl1.innerHTML

  if (prevLvl >= 20) time = 900
  else if (prevLvl > 19) time = 700
  else if (prevLvl > 1) time

  if (numLvl1.innerHTML >= 22) return
  setTimeout(lvl, time)
}

lvl()

function lvl1() {
  let time = 200
  numLvl2.innerHTML++
  let prevLvl = numLvl2.innerHTML

  if (prevLvl >= 8) time = 900
  else if (prevLvl > 1) time

  if (numLvl2.innerHTML >= 10) return
  setTimeout(lvl1, time)
}

lvl1()

function lvl2() {
  let time = 50
  numLvl3.innerHTML++
  let prevLvl = numLvl3.innerHTML

  if (prevLvl >= 97) time = 500
  else if (prevLvl > 90) time = 100
  else if (prevLvl > 1) time

  if (numLvl3.innerHTML >= 98) return
  setTimeout(lvl2, time)
}

lvl2()

const like = document.querySelectorAll('.product__like')

for (let i = 0; i < like.length; i++) {
  like[i].addEventListener('click', () => {
    like.forEach(item => item.classList.remove('active_like'))
    like[i].classList.add('active_like')
  })
}

const footerInp = document.querySelector('.footer__input')
const footerBtn = document.querySelector('.footer__btn')

footerBtn.onclick = clear

function clear() {
  footerInp.value = ''
}