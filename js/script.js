
const MAP_THIRD_FLOOR =
	[
		[1, 1, 1, 99, 1, 1, 1],
		[1, 0, 2, 0, 0, 0, 3],
		[1, 0, 2, 2, 2, 2, 10],
		[1, 4, 2, 0, 0, 0, 0],
		[1, 0, 0, 0, 9, 1, 1],
		[1, 0, 0, 0, 1, 0, 1],
		[1, 4, 1, 1, 1, 1, 1],
	]
const MAP_SECOND_FLOOR =
	[
		[1, 1, 1, 1, 1, 7, 1],
		[1, 0, 0, 0, 1, 0, 1],
		[1, 1, 9, 0, 1, 0, 1],
		[0, 0, 1, 0, 1, 0, 1],
		[0, 0, 1, 0, 99, 0, 1],
		[0, 0, 1, 0, 0, 0, 0],
		[0, 0, 11, 0, 0, 0, 0],
	]
const MAP_FIRST_FLOOR =
	[
		[0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 1, 1, 1],
		[0, 0, 0, 99, 1, 0, 1],
		[6, 1, 1, 1, 1, 0, 1],
		[13, 0, 0, 12, 0, 0, 1],
		[0, 0, 0, 0, 0, 0, 1],
		[0, 0, 0, 25, 1, 1, 1],
	]
/*
1 - corridor 
2 - ven
3 - enter ven
4 - enter lab
5 - enter enginier lab
6 - enter garden lab
7 - enter electro room
8 - enter frieeze
9 - enter elevator
10 - enter ladder 
11 - enter comman p
12 - enter restroom
13 - enter GL CP 
25 - victory
99 - choose direction  
*/
const DIRECTION_MOVE = ['Left', 'Top', 'Right', 'Straight'];
const HELLO_MESSAGE = [
	"Hello there\nLet's get outta here!\r\n"
];
const CHOOSE_DIRECTION = [
	"Which side you want to go?..\n"
];
const CHOOSE_ACTION = [
	"Are you sure you want to\ndo it?"
];
const FINE_MESSAGE = [
	"Fine..."
];
const CHOOSE_COLOR_OF_THE_WALL = [
	"Which color\nare walls\non your floor?"
];
const START_POSITION_POINT_X = 3;
const START_POSITION_POINT_Y = 0;
//const START_POSITION_FLOOR = 3;

const COLOR_OF_THE_WALLS = ["Green", "Blue", "Red"];

class User {
	user_position;
	user_hp;
}
let HAS_ESCAPED = false;
let FLOOR_START;


function typeText(message) {

	let line = 0;
	let count = 0;
	let out = "";

	let htmlOut = document.querySelector(".dialogue-area")

	function typeLine(message) {

		let interval = setTimeout(() => {
			out += message[line][count];
			htmlOut.innerHTML = out + '|';
			count++;

			if (count >= message[line].length) {
				count = 0;
				line++;
				if (line = message.length) {
					clearTimeout(interval);
					htmlOut.innerHTML = out;
					return true;
				}
			}
			typeLine(message);
		}, 75);
		/*
			getRandomInt(getRandomInt(350 * 3.0))
		*/
	}
	typeLine(message);

}

const dialogueArea = document.querySelector(".dialogue-area");
function clearDialogueField() {
	dialogueArea.innerHTML = "";
}

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max) - 100);
}

const allButtons = document.querySelectorAll(".main-block__button");
function loadDirection() {
	typeText(CHOOSE_DIRECTION);
	allButtons[0].innerHTML = "Left";
	allButtons[1].innerHTML = "Top";
	allButtons[2].innerHTML = "Right";
	allButtons[3].innerHTML = "Straight";
}

function loadAction() {

}

function setDefaultButtonText() {
	allButtons[0].innerHTML = "One";
	allButtons[1].innerHTML = "Two";
	allButtons[2].innerHTML = "Three";
	allButtons[3].innerHTML = "Four";
	allButtons[0].setAttribute("style", "display: block");
	allButtons[1].setAttribute("style", "display: block");
	allButtons[2].setAttribute("style", "display: block");
	allButtons[3].setAttribute("style", "display: block");
}

const buttonsBlock = document.querySelector(".main-block__buttons");

function chooseWallColor() {
	let wallColor;
	let floor;
	allButtons[0].innerHTML = "Green";
	allButtons[1].innerHTML = "Blue";
	allButtons[2].innerHTML = "Red";
	allButtons[3].setAttribute("style", "display: none");

	typeText(CHOOSE_COLOR_OF_THE_WALL);

	buttonsBlock.addEventListener("click", (e) => {
		if (e.target.closest(".main-block__button")) {
			wallColor = e.target.innerText;
			switch (wallColor) {
				case "GREEN":
					floor = 1;
					break;
				case "BLUE":
					floor = 2;
					break;
				case "RED":
					floor = 3;
					break;
			}
			setDefaultButtonText();
			clearDialogueField();
		}
	}, true);
	return floor;
}

function sayHello() {
	allButtons[0].innerHTML = "Yay!";
	allButtons[1].setAttribute("style", "display: none");
	allButtons[2].setAttribute("style", "display: none");
	allButtons[3].setAttribute("style", "display: none");

	typeText(HELLO_MESSAGE);
	buttonsBlock.addEventListener("click", (e) => {
		if (e.target.closest(".main-block__button")) {
			setDefaultButtonText();
			clearDialogueField();
		}
	}, true);
}

sayHello();

/**while (HAS_ESCAPED == false) {
		
}
**/
