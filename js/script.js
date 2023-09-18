
const MAP_THIRD_FLOOR =
	[
		[1, 1, 1, 99, 1, 1, 1],
		[1, 0, 2, 0, 0, 0, 1],
		[1, 0, 99, 2, 2, 2, 3],
		[1, 4, 2, 0, 0, 0, 10],
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

const MAX_SIZE = 7;

const DIRECTION_MOVE = ['Left', 'Right', 'Straight'];
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
	user_positionX;
	user_positionY;
	user_hp = 100;
	user_hasKey_EnginierRoom = false;
	user_hasKey_Card_lvl_1 = false;
	user_hasKey_Card_lvl_2 = false;
	user_hasKey_Card_lvl_3 = false;
	user_hasSpanner = false;
	user_hasFlask = false;
	is_on_the_3_floor = true;
	is_on_the_2_floor = false;
	is_on_the_1_floor = false;
}

// --------------------------------------
let HAS_ESCAPED = false;
let FLOOR_START;
let ELECTRICITY_IS_TURNDED_ON = false;
let ELEVATOR_IS_TURNDED_ON = false;
let IS_SPRAYED = false;

let aUser = new User();

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
const options = {
	"capture": false,
	"once": true,
	"passive": false,
}

const user_hp_text = document.querySelector(".main-block__hpbar");
window.addEventListener("load", () => {
	user_hp_text.insertAdjacentHTML(
		'beforeend',
		`<a>${aUser.user_hp}</a>`
	);
});

function enterVen() {
	let answerIs;
	typeText(["There is a ven\non the way.\nYou want to enter?"]);
	allButtons[0].innerHTML = "Yes";
	allButtons[1].innerHTML = "No";
	allButtons[2].setAttribute("style", "display: none");
	allButtons[3].setAttribute("style", "display: none");

	allButtons[0].addEventListener("click", () => {
		typeText(["Welcome!"]);
	});

	allButtons[1].addEventListener("click", () => {
		setDefaultButtonText();
		doMove();
	});

	return answerIs;
}

function doMove() {
	let direction;
	let direction_num;
	//	let aUser = new User();
	aUser.user_positionX = START_POSITION_POINT_X;
	aUser.user_positionY = START_POSITION_POINT_Y;


	allButtons[0].innerHTML = "Straight";
	allButtons[1].innerHTML = "Right";
	allButtons[2].innerHTML = "Left";
	allButtons[3].innerHTML = "Back";

	//setTimeout(typeText, 5000, CHOOSE_DIRECTION);
	typeText(CHOOSE_DIRECTION);

	allButtons[0].addEventListener("click", () => {

	}, options);

	allButtons[1].addEventListener("click", () => {

	}, options);

	allButtons[2].addEventListener("click", () => {
		enterVen();

	}, options);

	allButtons[3].addEventListener("click", () => {

	}, options);

}

function chooseWallColor() {
	let wallColor;
	let floor;
	allButtons[0].innerHTML = "Green";
	allButtons[1].innerHTML = "Blue";
	allButtons[2].innerHTML = "Red";
	allButtons[3].setAttribute("style", "display: none");

	typeText(CHOOSE_COLOR_OF_THE_WALL);

	// ! make delay to wait until the text is written 

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
			let currFloor = ["You are on the " + floor.toString() + " floor..."];
			typeText(currFloor);
		}
		allButtons[0].innerHTML = "Ok";
		allButtons[1].setAttribute("style", "display: none");
		allButtons[2].setAttribute("style", "display: none");
		allButtons[3].setAttribute("style", "display: none");
		allButtons[0].addEventListener("click", (e) => {
			if (e.target.closest(".main-block__button")) {
				setDefaultButtonText();
				clearDialogueField();
				doMove();
			}
		}, options);
	}, options);

}

function doOkayButton() {
	allButtons[0].innerHTML = "Ok";
	allButtons[1].setAttribute("style", "display: none");
	allButtons[2].setAttribute("style", "display: none");
	allButtons[3].setAttribute("style", "display: none");

	buttonsBlock.addEventListener("click", (e) => {
		if (e.target.closest(".main-block__button")) {
			setDefaultButtonText();
			clearDialogueField();
			chooseWallColor();
		}
	}, options);
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
			chooseWallColor();

		}
	}, options);
}

sayHello();

/**while (HAS_ESCAPED == false) {
		
}
**/
