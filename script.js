// Fonctionnalité 1:
let footer = document.querySelector('footer')

onFooterClick = () => {
  console.log('Clique')
}

// footer.addEventListener('click', onFooterClick)

// _______________________________________________
//  Fonnctionnalité 1-Bis :

let count = 0
onFooterClickCount = () => {
  count += 1
  console.log(`Clic numéro ${count}`)
}

// footer.addEventListener('click', onFooterClickCount)

// _______________________________________________
//  Fonnctionnalité 2 :

let navbarHeader = document.getElementById('navbarHeader')
let burgerBtn = document.querySelector('.navbar-toggler')

navbarToggle = () => {
  navbarHeader.classList.toggle('collapse')
}

burgerBtn.addEventListener('click', navbarToggle)

// _______________________________________________
//  Fonnctionnalité 3 :

let editBtnCard1 = document.querySelector('div.col-md-4:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > button:nth-child(2)')
let cardText1 = document.querySelector('div.col-md-4:nth-child(1) > div:nth-child(1) > div:nth-child(2) > p:nth-child(1)')


changeColorCard1 = () => {
  cardText1.style.color = 'red'
}

editBtnCard1.addEventListener('click', changeColorCard1)

// _______________________________________________
//  Fonnctionnalité 4 :

let editBtnCard2 = document.querySelector('div.col-md-4:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > button:nth-child(2)')
let cardText2 = document.querySelector('div.col-md-4:nth-child(2) > div:nth-child(1) > div:nth-child(2) > p:nth-child(1)')
console.log(cardText2)

changeColorCard2 = () => {
  if (cardText2.style.color === 'green') {
    cardText2.style.color = ''
  } else cardText2.style.color = 'green'
}

editBtnCard2.addEventListener('click', changeColorCard2)