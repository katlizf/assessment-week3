const restarauntButton = (evt) => {
    evt.preventDefault();
    alert(`A great restaraunt to visit for middle eastern food in Milwaukee is Casablanca!`)
}

let restaraunt = document.querySelector(`button#restaraunt`)


restaraunt.addEventListener('click', restarauntButton)

// NOT DONE: Create a button that allows the user to request a random restaurant recommendation. Add an event listener in Javascript listens for a click on the button. When the button is clicked, your Javascript should call a new function that you write, which chooses a random restaurant for the user.