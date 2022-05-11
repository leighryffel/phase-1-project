// Pseudocode Outline:

// define variables
const drinkImageMenu = document.querySelector('#drink-menu')

// write fetch request to collect data for all non-alcoholic drinks from cocktail API
fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
    .then(res => res.json())
    .then(data => createMenu(data))

// write .forEach() function to iterate through the non-alcoholic drinks and find their IDs, store in new array

// write fetch request to collect data for the non-alcoholic IDs from cocktail API

// create event listener to run the fetch functions after the DOM loads

// create function to put information from the fetched mocktails in the browser

function createMenu(data) {
    let drinksObj = Object.values(data);
    let nestedDrinks = drinksObj[0];
    for (let i = 0; i < nestedDrinks.length; i++) { 
        const newImg = document.createElement('img');
        newImg.className = "menu-image";
        newImg.src = nestedDrinks[i].strDrinkThumb;
        drinkImageMenu.appendChild(newImg);
        // listener on click
        // get drink ID
        // fetch API using the ID
    };
};

document.addEventListener('DOMContentLoaded', function() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(res => res.json())
    .then(data => renderDrink(data))
})
function renderDrink(data) {
//renders drink title
    let drinkTitle = document.querySelector('.name')
    let drinksArr = data
    console.log(drinksArr.drinks[0].strDrink)
    drinkTitle.innerHTML = drinksArr.drinks[0].strDrink
//renders drink image
    let drinksImage = document.querySelector('.detail-image')
    let drinkImage = drinksArr.drinks[0].strDrinkThumb
    drinksImage.src = drinkImage
}

    // //renders drink instructions
    // let drinkInstructions = document.getElementById('recipe-display')
    // let drinkInst = drinksArr.drinks[0].strInstructions
    // drinkInstructions.innerHTML = drinkInst