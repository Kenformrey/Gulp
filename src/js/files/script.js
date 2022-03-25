// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

//* Добавление кнопки  листающей до верха сайта пример - Зеленая круглая кнопка https://kenformrey.github.io/Fagot/ ==========================================================================================================================
/*const BackToButton = document.querySelector('.back-to-top')
function backToTop() {
	BackToButton
}
backToTop()
window.onload = () => {
	window.onscroll = function (e) {
		let winY = window.scrollY
		if (winY > 300) {
			winY = null
		}
	}
	const scrollBtn = document.querySelector('.isShowBtn')
	window.onscroll = () => {
		if (window.scrollY > 400) {
			scrollBtn.classList.remove('isShowBtn__hide')
		} else {
			scrollBtn.classList.add('isShowBtn__hide')
		}
	}
	scrollBtn.onclick = () => {
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
	}
}
*/

// ================================================================================================================================================

//* Плавный скрол до якоря  ==========================================================================================================================

/* document.querySelectorAll('a[href^="#"').forEach((link) => {
	link.addEventListener('click', function (e) {
		e.preventDefault()

		let href = this.getAttribute('href').substring(1)

		const scrollTarget = document.getElementById(href)

		const topOffset = document.querySelector('.header').offsetHeight
		const elementPosition = scrollTarget.getBoundingClientRect().top
		const offsetPosition = elementPosition - topOffset

		window.scrollBy({
			top: offsetPosition,
			behavior: 'smooth',
		})
	})
})
*/

// ================================================================================================================================================

