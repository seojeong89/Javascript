const form = document.querySelector('form')
const input = form.querySelector('input')
const foodList = document.querySelector('.food_list')

const APP_ID = '9a043323'
const APP_KEY = 'a304cd7f8cc33630fd7c6e4cb2df04b0'


function paintRecipe(items) {
  console.log(items)

  let foods = ''
  items.map(item => {
    foods += `
      <div class="food">
        <div class="food_img">
          <img src="${item.recipe.image}" alt="" />
        </div>
        <div class="food_info">
          <div class="food__title">
            <h3>${item.recipe.label}</h3>
            <a href="${item.recipe.url}" target="_blank" class="btn">View Recipe</a>
          </div>
          <p class="food__extra">Caloris : ${item.recipe.calories.toFixed(2)}</p>
          <p class="food__extra">Diet Label : ${item.recipe.dietLabels.length > 0 ? item.recipe.dietLabels : 'No data'}</p>
          <p class="food__extra">Health Label : ${item.recipe.healthLabels}</p>
        </div>
      </div>
    `

    foodList.innerHTML = foods

  })
}

async function getRecipe(query) {
  const baseURL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=20`
  const response = await fetch(baseURL)
  const data = await response.json()

  paintRecipe(data.hits)
}

function init() {
  form.addEventListener('submit', function (e) {
    e.preventDefault()
    const query = input.value

    if (query === '') return

    getRecipe(query)
    input.value = ''
  })
}

init()