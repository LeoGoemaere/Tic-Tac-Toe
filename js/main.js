const boxs = Array.from(document.querySelectorAll('.box'));
const gridContainer = document.querySelector('.grid');

const players = document.querySelector('.players');
const playersIcons = Array.from(document.querySelectorAll('.player'));
const winOverlay = document.querySelector('.win-overlay');
const score = document.querySelectorAll('.score');
const replay = document.querySelector('.replay');

const horizontal = document.querySelectorAll('.horizontal');
const vertical = document.querySelectorAll('.vertical');

// Init Grid model class
const ticTacToe = new Grid();

// Init boxs view class
const squares = new Boxs(boxs, ticTacToe, gridContainer, players, score, winOverlay, horizontal, vertical);

// Init grid controller class
const gridController = new GridController(ticTacToe, squares);

window.addEventListener('DOMContentLoaded', () => {
	gridController.initView(); 

	boxs.map((box, index) => {
		box.addEventListener('click', () => {
			gridController.play(index); 
		});
	})

	replay.addEventListener('click', () => {
		gridController.clear();
	})

	playersIcons.map((icon, index) => {
		icon.addEventListener('click', () => {
			index === 0 ? squares.xStart = true : squares.xStart = false;
			gridController.clear();
		})
	})
});

