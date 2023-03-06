// Fonctionnalité 1:
let footer = document.querySelector('footer')

onFooterClick = () => {
  console.log('Clique')
}

// footer.addEventListener('click', onFooterClick)

// _______________________________________________
//  Fonnctionnalité 1-Bis :
// _______________________________________________

let count = 0
onFooterClickCount = () => {
  count += 1
  console.log(`Clic numéro ${count}`)
}

footer.addEventListener('click', onFooterClickCount)


// _______________________________________________
//  Fonnctionnalité 2 :
// _______________________________________________

let navbarHeader = document.getElementById('navbarHeader')
let burgerBtn = document.querySelector('.navbar-toggler')

navbarToggle = () => {
  navbarHeader.classList.toggle('collapse')
}

burgerBtn.addEventListener('click', navbarToggle)


// _______________________________________________
//  Fonnctionnalité 3 :
// _______________________________________________

let editBtnCard1 = document.querySelector('div.col-md-4:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > button:nth-child(2)')
let cardText1 = document.querySelector('div.col-md-4:nth-child(1) > div:nth-child(1) > div:nth-child(2) > p:nth-child(1)')


changeColorCard1 = () => {
  cardText1.style.color = 'red'
}

editBtnCard1.addEventListener('click', changeColorCard1)


// _______________________________________________
//  Fonnctionnalité 4 :
// _______________________________________________

let editBtnCard2 = document.querySelector('div.col-md-4:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > button:nth-child(2)')
let cardText2 = document.querySelector('div.col-md-4:nth-child(2) > div:nth-child(1) > div:nth-child(2) > p:nth-child(1)')

changeColorCard2 = () => {
  if (cardText2.style.color === 'green') {
    cardText2.style.color = ''
  } else cardText2.style.color = 'green'
}

editBtnCard2.addEventListener('click', changeColorCard2)


// _______________________________________________
//  Fonnctionnalité 5 :
// _______________________________________________

let navbar = document.querySelector('header')
let link = document.querySelector('link')

byebyeBootstrap = () => {
  if (link.disabled === true) {
    link.disabled = false
  } else {
    link.disabled = true
  }
}

navbar.addEventListener('dblclick', byebyeBootstrap)


// _______________________________________________
//  Fonnctionnalité 6 :
// _______________________________________________

let allCards = document.querySelectorAll('div.col-md-4')

allCards.forEach(card => {
  let cardImg = card.querySelector('img')
  let cardTxt = card.querySelector('p')
  let viewBtn = card.querySelector('.btn-success')
  changeCard = () => {
    if (cardImg.style.width === '20%') {
      cardImg.style.width = '80%'
      cardTxt.display = 'block'
    }
    else {
      cardImg.style.width = '20%'
      cardTxt.display = 'none'
    }
  }
  viewBtn.addEventListener('mouseover', changeCard)
})


// _______________________________________________
//  Fonnctionnalité 7 :
// _______________________________________________

let rightArrow = document.querySelector('a.btn:nth-child(2)')

rotateRight = () => {
  let row = document.getElementsByClassName('row')[1]
  let lastCard = row.lastElementChild
  row.prepend(lastCard)
}

rightArrow.addEventListener('click', rotateRight)


// _______________________________________________
//  Fonnctionnalité 8 :
// _______________________________________________

let leftArrow = document.querySelector('a.btn:nth-child(1)')
leftArrow.removeAttribute('href')
console.log(leftArrow)

rotateLeft = () => {
  let row = document.getElementsByClassName('row')[1]
  let firstCard = row.firstElementChild
  row.append(firstCard)
}

leftArrow.addEventListener('click', rotateLeft)


// _______________________________________________
//  Fonnctionnalité 9 :
// _______________________________________________