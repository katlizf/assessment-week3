console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert('form submit');
}

function picCompliment(evt) {
	evt.preventDefault()
	alert(`You're awesome!`)
}

let form = document.querySelector('form#contact');
let img = document.querySelector('img')

form.addEventListener('submit', handleSubmit);
img.addEventListener('mouseover', picCompliment)