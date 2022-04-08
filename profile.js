const colorButton = (evt) => {
    evt.preventDefault();
    alert(`My favorite color is red!`)
}

const placeButton = (evt) => {
    evt.preventDefault()
    alert(`My favorite place is my home :)`)
}

const ritualButton = (evt) => {
    evt.preventDefault()
    alert(`My favorite ritual is waking up and having an espresso or a cup of coffee, Yum!`)
}

let favoriteColor = document.querySelector(`button#color`)
let favoritePlace = document.querySelector(`button#place`)
let favoriteRitual = document.querySelector(`button#ritual`)

favoriteColor.addEventListener('click', colorButton)
favoritePlace.addEventListener(`click`, placeButton)
favoriteRitual.addEventListener(`click`, ritualButton)