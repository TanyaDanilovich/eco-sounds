const button = document.querySelector('.button')
const audio = new Audio();
audio.src = "./assets/audio/forest.mp3"
const main = document.querySelector('.main')

let isPlay = false
function playPauseButton() {
	if (isPlay) {
		console.log(isPlay);
		button.classList.remove('pause')
		console.log('убираем картинку паузы');
	} else {
		button.classList.add('pause')
		console.log('добавляем картинку паузы');
	}
}
button.addEventListener('click', playPauseButton)


function playAudioBtnToggle() {
	if (!isPlay) {
		audio.currentTime = 0
		audio.play()
		isPlay = true
	} else {
		audio.pause()
		isPlay = false
	}
	birdAnimationToggle()
}
button.addEventListener('click', playAudioBtnToggle)

const navigation = document.querySelector('.header__content')
const navigationItem = document.querySelectorAll('.nav__item')
function navigationItemsActive(event) {
	if (event.target.classList.contains('nav__item')) {
		navigationItem.forEach((btn) => btn.classList.remove('active'))
		event.target.classList.add('active')
		let id = event.target.id
		audio.src = `./assets/audio/${id}.mp3`
		main.style.backgroundImage = `url(./assets/img/${id}.jpg)`
		playAudio()
		button.classList.add('pause')
		console.log('вызвана функция playaudio из navigationItemsActive');
	}
}
navigation.addEventListener('click', navigationItemsActive)

function playAudio() {
	audio.currentTime = 0
	audio.play()
	isPlay = true
}

const bird = document.querySelector('.bird')
function birdAnimationToggle() {
	if (isPlay) {
		bird.classList.add('bird-animation')
	} else {
		bird.classList.remove('bird-animation')
	}
}

let volumeSlider = document.querySelector('.volumeSlider');
let lastVolumePosition

function volumeController() {
	audio.volume = volumeSlider.value;
	lastVolumePosition = volumeSlider.value;
}

volumeSlider.addEventListener("input", volumeController);

function getLocalStorage() {
	if (localStorage.getItem('lastVolumePosition')) {
		lastVolumePosition = localStorage.getItem('lastVolumePosition')
		setLastVolumePosition(lastVolumePosition)
	}
}
function setLastVolumePosition(value) {
	volumeSlider.setAttribute('value', (value))
}

window.addEventListener('load', getLocalStorage)

function setLocalStorage() {
	localStorage.setItem('lastVolumePosition', lastVolumePosition);
}
window.addEventListener('beforeunload', setLocalStorage)

console.log('		Есть не меньше пяти интерактивных элементов, с которыми пользователи могут взаимодействовать; \n		Изменение внешнего вида самого элемента и состояния курсора при наведении, плавные анимации; \n		В футере приложения есть ссылка на гитхаб автора приложения, год создания приложения,\n		логотип курса со ссылкой на курс; \n		При кликах по интерактивным элементам меняется изображение; \n		При кликах по интерактивным элементам меняется звук; \n		Активный в данный момент интерактивный элемент выделяется стилем; \n		Есть кнопка Play / Pause, при клике по которой можно запустить или остановить проигрывание звука; \n		Внешний вид и функционал кнопки Play / Pause изменяется в зависимости от того, проигрывается ли в данный момент звук; \n		Очень высокое качество оформления приложения и / или дополнительный не предусмотренный в задании функционал,\n		улучшающий качество приложения\n		Дополнительно присутствует регулятор громкости\n		Уровень громкости сохраняется при перезагрузке страницы\n				Оценка 60 баллов.');



