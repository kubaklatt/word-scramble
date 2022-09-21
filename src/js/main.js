let words = [
	{
		word: 'addition',
		hint: 'Hint: The process of adding numbers',
	},
	{
		word: 'meeting',
		hint: 'Hint: Event in which people come together',
	},
	{
		word: 'number',
		hint: 'Hint: Math symbol used for counting',
	},
	{
		word: 'exchange',
		hint: 'Hint: The act of trading',
	},
	{
		word: 'canvas',
		hint: 'Hint: Piece of fabric for oil painting',
	},
	{
		word: 'garden',
		hint: 'Hint: Space for planting flower and plant',
	},
	{
		word: 'position',
		hint: 'Hint: Location of someone or something',
	},
	{
		word: 'feather',
		hint: 'Hint: Hair like outer covering of bird',
	},
	{
		word: 'comfort',
		hint: 'Hint: A pleasant feeling of relaxation',
	},
	{
		word: 'tongue',
		hint: 'Hint: The muscular organ of mouth',
	},
	{
		word: 'expansion',
		hint: 'Hint: The process of increase or grow',
	},
	{
		word: 'country',
		hint: 'Hint: A politically identified region',
	},
	{
		word: 'group',
		hint: 'Hint: A number of objects or persons',
	},
	{
		word: 'taste',
		hint: 'Hint: Ability of tongue to detect flavour',
	},
	{
		word: 'store',
		hint: 'Hint: Large shop where goods are traded',
	},
	{
		word: 'field',
		hint: 'Hint: Area of land for farming activities',
	},
	{
		word: 'friend',
		hint: 'Hint: Person other than a family member',
	},
	{
		word: 'pocket',
		hint: 'Hint: A bag for carrying small items',
	},
	{
		word: 'needle',
		hint: 'Hint: A thin and sharp metal pin',
	},
	{
		word: 'expert',
		hint: 'Hint: Person with extensive knowledge',
	},
	{
		word: 'statement',
		hint: 'Hint: A declaration of something',
	},
	{
		word: 'second',
		hint: 'Hint: One-sixtieth of a minute',
	},
	{
		word: 'library',
		hint: 'Hint: Place containing collection of books',
	},
]

const playerInput = document.querySelector('.enter-word')
const infoInput = document.querySelector('.info')
const wordToGuess = document.querySelector('.word')
const hintToWord = document.querySelector('.hint-text')
const blundersAmount = document.querySelector('.blunders-amount')
const scoreAmount = document.querySelector('.score-amount')
const easyBtn = document.querySelector('.easy')
const hardBtn = document.querySelector('.hard')
const checkBtn = document.querySelector('.check-btn')
const timeAmount = document.querySelector('.time-amount')
const loseModal = document.querySelector('.lose-modal')
const winModal = document.querySelector('.win-modal')
const loseModalClose = document.querySelector('.lose-modal-close')
const loseModalCloseBtn = document.querySelector('.lose-modal-btn')
const winModalClose = document.querySelector('.win-modal-close')
const winModalCloseBtn = document.querySelector('.win-modal-btn')

let seconds = 100
let blunders = 0
let score = 0
let correctWord

// function timeLeft() {
//   timeAmount.innerHTML = seconds;
//   seconds--;
//   if (seconds === 0) {
//     seconds = 0;
//     loseModal.style.display = "flex";
//   }
// }

// GET A RANDOM WORD

let randomObj = words[Math.floor(Math.random() * words.length)]
let wordToShuffle = randomObj.word

// FUNCTION TO GENERATE A RANDOM WORD WITH HINT

function newWord() {
	let randomObj = words[Math.floor(Math.random() * words.length)]
	let wordToShuffle = randomObj.word
	let shuffled = wordToShuffle
		.split('')
		.sort(function () {
			return 0.5 - Math.random()
		})
		.join('')
	correctWord = wordToShuffle
	wordToGuess.innerHTML = shuffled
	hintToWord.innerHTML = randomObj.hint
}

// function scoreAndBlunders() {
// 	if (infoInput.innerHTML === 'Nice!') {
// 		score++
// 		scoreAmount.innerHTML = score
// 	}
// }

// EASY MODE

function playEasy() {
	resetScoreBlunders()
	newWord()
	infoInput.innerHTML = ''
}

// FUNCTION TO CHECK A PLAYER INPUT

function checkTheWord() {
	let userValue = playerInput.value.toLowerCase()
	if (userValue === correctWord) {
		score++
		scoreAmount.innerHTML = score
		// infoInput.innerHTML = 'Nice!'
		newWord()
		checkWinLose()
	} else if (userValue === '') {
		infoInput.innerHTML = 'You have to write something'
	} else {
		blunders++
		blundersAmount.innerHTML = blunders
		checkWinLose()
		// infoInput.innerHTML = 'Try again'
	}
}

// FUNCTION TO RESET SCORE AND BLUNDERS

function resetScoreBlunders() {
	score = 0
	blunders = 0
	scoreAmount.innerHTML = score
	blundersAmount.innerHTML = blunders
}

// FUNCTION TO CHECK IF PLAYER WON OR LOST

function checkWinLose() {
	if (score === 5) {
		console.log('jest 5 score')
		winModal.style.display = 'flex'
		resetScoreBlunders()
	}
}

// CLOSE LOSE MODAL ON CLICK OUTSIDE

window.addEventListener('click', function (e) {
	if (e.target == loseModal) {
		loseModal.style.display = 'none'
	}
})

// CLOSE WIN MODAL ON CLICK OUTSIDE

window.addEventListener('click', function (e) {
	if (e.target == winModal) {
		winModal.style.display = 'none'
	}
})

// CLOSE LOSE MODAL ON X

loseModalClose.addEventListener('click', function () {
	loseModal.style.display = 'none'
})

// CLOSE WIN MODAL ON X

winModalClose.addEventListener('click', function () {
	winModal.style.display = 'none'
})

// CLOSE LOSE MODAL ON BUTTON

loseModalCloseBtn.addEventListener('click', function () {
	loseModal.style.display = 'none'
})

// CLOSE WIN MODAL ON BUTTON

winModalCloseBtn.addEventListener('click', function () {
	winModal.style.display = 'none'
})

// EVENT LISTENERS

easyBtn.addEventListener('click', playEasy)
checkBtn.addEventListener('click', checkTheWord)
