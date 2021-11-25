const input = Array.from(document.getElementsByClassName('main-form-fields-field'))
const btn = document.getElementById('send')
const navActive = document.getElementById('navActive')
const navBar = document.getElementById('navbar')
const exit = document.getElementById('exit')

btn.addEventListener('click', function (e) {
	e.preventDefault()
	for (let i = 0; i < input.length; i++) {
		if (!input[i].children[0].value) {
			input[i].children[2].style.display = 'block'
			e.preventDefault()
		} else {
			input[i].children[2].style.display = 'none'
		}
	}
})

for (let i = 0; i < input.length; i++) {
	input[i].children[0].addEventListener('input', () => {
		if (input[i].children[0].value) {
			input[i].children[2].style.display = 'none'
		}
	})
}

navActive.addEventListener('click', () => {
	navBar.classList.toggle('active')
})

exit.addEventListener('click', () => {
	navBar.classList.toggle('active')
})
