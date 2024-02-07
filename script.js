const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassNAme('navbar-links')[0]

toggleButtion.addEventListener('click', () => {
	navbarLinks.classlist.toggle('active')
})