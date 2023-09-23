
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
allButtons[4].setAttribute("style", "display: none");
allButtons[5].setAttribute("style", "display: none");
allButtons[6].setAttribute("style", "display: none");
allButtons[7].setAttribute("style", "display: none");
const blockOfButtons = document.querySelector(".main-block__buttons");

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
	allButtons[4].setAttribute("style", "display: none");
	allButtons[5].setAttribute("style", "display: none");
	allButtons[6].setAttribute("style", "display: none");
	allButtons[7].setAttribute("style", "display: none");
}

const buttonsBlock = document.querySelector(".main-block__buttons");
const options = {
	"capture": false,
	"once": true,
	"passive": false,
}

const user_hp_text = document.querySelector(".main-block__hpbar");

// ! rewrite
window.addEventListener("load", () => {
	user_hp_text.insertAdjacentHTML(
		'beforeend',
		`<a>${aUser.user_hp}</a>`
	);
});

// Creating new buttons
function createButton() {
	const newButton = document.createElement('a');
	newButton.className = "main-block__button";
	return newButton;
}

function enterVen() {
	// ! Create new buttons instead of using old ones
	let answerIs;
	const defaultAnswerVenStart = 4;
	const defaultAnswerVenEnd = 6;

	for (i = 0; i < 4; i++) {
		allButtons[i].remove();
	}

	allButtons[4] = createButton();
	allButtons[5] = createButton();

	allButtons[4].setAttribute("style", "display: block");
	allButtons[5].setAttribute("style", "display: block");

	blockOfButtons.append(allButtons[4]);
	blockOfButtons.append(allButtons[5]);

	typeText(["There is a ven on the way.\nYou want to enter?"]);
	allButtons[4].innerHTML = "Yes";
	allButtons[5].innerHTML = "No";

	allButtons[4].addEventListener("click", () => {
		typeText(["Here we go..."]);
	}, options);

	allButtons[5].addEventListener("click", () => {
		// !-------------------
		doMove();
	}, options);

	return answerIs;
}

function toElevator_3_2() {
	for (i = 0; i < 8; i++) {
		allButtons[i].remove();
	}

	if (ELECTRICITY_IS_TURNDED_ON == true) {
		allButtons[4] = createButton();
		allButtons[5] = createButton();
		allButtons[4].setAttribute("style", "display: block");
		allButtons[5].setAttribute("style", "display: block");
		blockOfButtons.append(allButtons[4]);
		blockOfButtons.append(allButtons[5]);

		typeText(["There is an \nYou want to come in?"]);
		allButtons[4].innerHTML = "Yes";
		allButtons[5].innerHTML = "No";
	} else {
		typeText(["Without electricity, the lifts won't work.....\nWe should look around"]);
		// !
		doMove();
	}



}

function toLab() {
	for (i = 0; i < 8; i++) {
		allButtons[i].remove();
	}

	allButtons[4] = createButton();
	allButtons[5] = createButton();
	allButtons[4].setAttribute("style", "display: block");
	allButtons[5].setAttribute("style", "display: block");
	blockOfButtons.append(allButtons[4]);
	blockOfButtons.append(allButtons[5]);

	typeText(["There is a lab\nYou want to come in?"]);
	allButtons[4].innerHTML = "Yes";
	allButtons[5].innerHTML = "No";

	allButtons[4].addEventListener("click", () => {
		if (aUser.user_hasSpanner == true) {
			typeText(["Yes!\nNow it looks like you might be able to open some doors"]);
			aUser.user_hasKey_Card_lvl_1 = true;
			doMove();
		} else {
			typeText(["Some kind of device covered by a grate.\nYou can't open it without a tool"]);
		}
	}, options);

	allButtons[5].addEventListener("click", () => {
		// !
		toElevator_3_2();
	}, options);

}

function toTheStairsOrVen() {
	for (i = 0; i < 4; i++) {
		allButtons[i].remove();
	}

	allButtons[4] = createButton();
	allButtons[5] = createButton();
	allButtons[6] = createButton();

	allButtons[4].setAttribute("style", "display: block");
	allButtons[5].setAttribute("style", "display: block");
	allButtons[6].setAttribute("style", "display: block");

	blockOfButtons.append(allButtons[4]);
	blockOfButtons.append(allButtons[5]);
	blockOfButtons.append(allButtons[6]);

	typeText(["There is a ven and the stairs on the way.\nWhere you want to go?"]);
	allButtons[4].innerHTML = "Ven";
	allButtons[5].innerHTML = "Stairs";
	allButtons[6].innerHTML = "Back";

	allButtons[4].addEventListener("click", () => {
		typeText(["Here we go..."]);
	}, options);

	allButtons[5].addEventListener("click", () => {
		typeText(["We are on the 2nd floor.."]);
		is_on_the_3_floor = false;
		is_on_the_2_floor = true;
		doMove_2_stairs();
	}, options);

	allButtons[6].addEventListener("click", () => {
		doMove();
	}, options);


}

function doMove_2_stairs() {

	typeText(["There's a room here.\nI think the door's open,\ndo you want to come in?"]);

}

function afterEnginieringToLabOr() {
	setDefaultButtonText();
	clearDialogueField();
	typeText(["Get back or keep on moving?.."]);
	allButtons[0].innerHTML = "Straight";
	allButtons[1].setAttribute("style", "display: none");
	allButtons[2].setAttribute("style", "display: none");
	allButtons[3].innerHTML = "Back";
}

function toEnginierRoom() {

	for (i = 0; i < 8; i++) {
		allButtons[i].remove();
	}

	allButtons[4] = createButton();
	allButtons[5] = createButton();
	allButtons[4].setAttribute("style", "display: block");
	allButtons[5].setAttribute("style", "display: block");
	blockOfButtons.append(allButtons[4]);
	blockOfButtons.append(allButtons[5]);

	typeText(["There is an enginiering room.\nYou want to come in?"]);
	allButtons[4].innerHTML = "Yes";
	allButtons[5].innerHTML = "No";

	allButtons[4].addEventListener("click", () => {

		if (ELECTRICITY_IS_TURNDED_ON == true) {
			// ! Write a script
			typeText(["There is a key\nYou want to take it?"]);
		} else {
			typeText(["The door is locked...\nGotta open this somehow..."]);
		}
	}, options);

	allButtons[5].addEventListener("click", () => {
		// ! Write to lab and lift
		toLab();
	}, options);

}

function removeButtons() {
	for (let i = 0; i < allButtons.length; i++) {
		allButtons[i].remove();
	}
}

function doMove() {
	//let direction;
	//let direction_num;
	//	let aUser = new User();
	//aUser.user_positionX = START_POSITION_POINT_X;
	//aUser.user_positionY = START_POSITION_POINT_Y;
	let i;

	let defaultLengthBlockOfButtons = allButtons.length;
	let defaultCountOfChoiceToMove = 4;

	for (i = 0; i < 8; i++) {
		allButtons[i].remove();
	}

	for (i = 0; i < defaultCountOfChoiceToMove; i++) {
		allButtons[i] = createButton();
	}

	for (i = 0; i < defaultLengthBlockOfButtons; i++) {
		blockOfButtons.append(allButtons[i]);
	}

	setDefaultButtonText();
	clearDialogueField();

	allButtons[0].innerHTML = "Straight";
	allButtons[1].innerHTML = "Right";
	allButtons[2].innerHTML = "Left";
	allButtons[3].innerHTML = "Back";

	//setTimeout(typeText, 5000, CHOOSE_DIRECTION);
	typeText(CHOOSE_DIRECTION);

	allButtons[0].addEventListener("click", () => {
		enterVen();
	}, options);

	allButtons[1].addEventListener("click", () => {
		toEnginierRoom();
	}, options);

	allButtons[2].addEventListener("click", () => {
		toTheStairsOrVen();
	}, options);

	allButtons[3].addEventListener("click", () => {
		typeText(["Oui!?\nWe just got here!\nYou want to sit 'ere and do nothin'?\nLet's get out!"]);
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
