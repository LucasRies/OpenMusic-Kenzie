import { products, categories } from '/src/scripts/productsData.js'
import { handleDarkMode } from '/src/scripts/theme.js'

/* 
        <li class="renderCards__card">
            <img src="/src/assets/img/1.jpg" alt="">
            <p class="renderCards__info">Scalene 2001</p>
            <h2 class="renderCards__albumName">Best Traks</h2>
            <span class="renderCards__spam">
              <p class="renderCards__price">R$: 12,99</p>
              <button class="renderCards_buyButton">Comprar</button>
            </span>
          </li>
*/

const createCard = (product) => {
    const card = document.createElement("li")
    const img = document.createElement("img")
    const info = document.createElement("p")
    const albumName = document.createElement("h2")
    const spam = document.createElement("span")
    const price = document.createElement("p")
    const buyButton = document.createElement("button")

    const bandAndYear = `${product.band} ${product.year}`;

    card.classList.add('renderCards__card')
    albumName.classList.add('renderCards__albumName')
    price.classList.add('renderCards__price')
    buyButton.classList.add('renderCards__buyButton')
    spam.classList.add('renderCards__spam')
    info.classList.add('renderCards__info')
    
    img.src = product.img

    info.innerText = bandAndYear
    albumName.innerText = product.title;   
    price.innerText = `R$: ${product.price}`  
    buyButton.innerText = "Comprar"

    spam.appendChild(price)
    spam.appendChild(buyButton)
    card.appendChild(img)
    card.appendChild(info)
    card.appendChild(albumName)
    card.appendChild(spam)     

    return card
}

const renderButton = (array) => {
  const container = document.querySelector(".filter__buttons")
  array.map(categorie =>{
    const li = document.createElement("li")
    const button = document.createElement("button")

    button.innerText = categorie

    button.classList.add('filter__button')

    li.appendChild(button)
    container.appendChild(li)
  })
}

const renderCards = (products) => {
  const container = document.querySelector(".renderCards__container") 
  container.innerHTML = ''

  products.forEach(product => {
    const card = createCard(product)
    container.appendChild(card)
  });
}

const filterCategorie = (categories, products) => {
  const buttons = document.querySelectorAll('.filter__button')
  const inputSelector = document.querySelector('.price__input')
  const priceText = document.querySelector('.price__text')

  let arrayFiltrado = products;
  let categoriaSelecionada = 'Todos';
  let valorInput = inputSelector.value;

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      categoriaSelecionada = button.innerText

      if (categoriaSelecionada === 'Todos') {
        arrayFiltrado = products.filter(
          product => product.price <= valorInput
        )
      } else {
        const categoryIndex = categories.findIndex(
          genero => genero === categoriaSelecionada
        )
        arrayFiltrado = products.filter(
          product => product.category === categoryIndex && product.price <= valorInput
        )
      }
      renderCards(arrayFiltrado)
    })
  })

  inputSelector.addEventListener('input', () => {
    valorInput = inputSelector.value
    priceText.innerText = valorInput

    if (categoriaSelecionada === 'Todos') {
      arrayFiltrado = products.filter(
        product => product.price <= valorInput
      )
    } else {
      const categoryIndex = categories.findIndex(
        genero => genero === categoriaSelecionada
      )
      arrayFiltrado = products.filter(
        product => product.category === categoryIndex && product.price <= valorInput
      )
    }
    renderCards(arrayFiltrado)
  })
}


renderButton(categories)
renderCards(products)
handleDarkMode()
filterCategorie(categories, products)


