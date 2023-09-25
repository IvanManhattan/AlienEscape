// TODO
// Enemies on the way -> 2 floor and 3 floor

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
let ENEMY_ON_THE_3_FLOOR = false;
let ENEMY_ON_THE_2_FLOOR = false;
let ENEMY_ON_THE_1_FLOOR = false;

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
allButtons[8].setAttribute("style", "display: none");
allButtons[9].setAttribute("style", "display: none");
allButtons[10].setAttribute("style", "display: none");
allButtons[11].setAttribute("style", "display: none");
allButtons[12].setAttribute("style", "display: none");
allButtons[13].setAttribute("style", "display: none");
allButtons[14].setAttribute("style", "display: none");
allButtons[15].setAttribute("style", "display: none");
allButtons[16].setAttribute("style", "display: none");
allButtons[17].setAttribute("style", "display: none");
allButtons[18].setAttribute("style", "display: none");
allButtons[19].setAttribute("style", "display: none");
allButtons[20].setAttribute("style", "display: none");
allButtons[21].setAttribute("style", "display: none");
allButtons[22].setAttribute("style", "display: none");
allButtons[23].setAttribute("style", "display: none");
allButtons[24].setAttribute("style", "display: none");
allButtons[25].setAttribute("style", "display: none");
allButtons[26].setAttribute("style", "display: none");
allButtons[27].setAttribute("style", "display: none");
allButtons[28].setAttribute("style", "display: none");
allButtons[29].setAttribute("style", "display: none");
allButtons[30].setAttribute("style", "display: none");
allButtons[31].setAttribute("style", "display: none");
allButtons[32].setAttribute("style", "display: none");
allButtons[33].setAttribute("style", "display: none");
allButtons[34].setAttribute("style", "display: none");
allButtons[35].setAttribute("style", "display: none");
allButtons[36].setAttribute("style", "display: none");
allButtons[37].setAttribute("style", "display: none");
allButtons[38].setAttribute("style", "display: none");
allButtons[39].setAttribute("style", "display: none");
allButtons[40].setAttribute("style", "display: none");
allButtons[41].setAttribute("style", "display: none");
allButtons[42].setAttribute("style", "display: none");
allButtons[43].setAttribute("style", "display: none");
allButtons[44].setAttribute("style", "display: none");
allButtons[45].setAttribute("style", "display: none");
allButtons[46].setAttribute("style", "display: none");
allButtons[47].setAttribute("style", "display: none");
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
	allButtons[8].setAttribute("style", "display: none");
	allButtons[9].setAttribute("style", "display: none");
	allButtons[10].setAttribute("style", "display: none");
	allButtons[11].setAttribute("style", "display: none");
	allButtons[12].setAttribute("style", "display: none");
	allButtons[13].setAttribute("style", "display: none");
	allButtons[14].setAttribute("style", "display: none");
	allButtons[15].setAttribute("style", "display: none");
	allButtons[16].setAttribute("style", "display: none");
	allButtons[17].setAttribute("style", "display: none");
	allButtons[18].setAttribute("style", "display: none");
	allButtons[19].setAttribute("style", "display: none");

	allButtons[20].setAttribute("style", "display: none");
	allButtons[21].setAttribute("style", "display: none");
	allButtons[22].setAttribute("style", "display: none");
	allButtons[23].setAttribute("style", "display: none");
	allButtons[24].setAttribute("style", "display: none");
	allButtons[25].setAttribute("style", "display: none");
	allButtons[26].setAttribute("style", "display: none");
	allButtons[27].setAttribute("style", "display: none");
	allButtons[28].setAttribute("style", "display: none");
	allButtons[29].setAttribute("style", "display: none");
	allButtons[30].setAttribute("style", "display: none");
	allButtons[31].setAttribute("style", "display: none");
	allButtons[32].setAttribute("style", "display: none");
	allButtons[33].setAttribute("style", "display: none");
	allButtons[34].setAttribute("style", "display: none");
	allButtons[35].setAttribute("style", "display: none");
	allButtons[36].setAttribute("style", "display: none");
	allButtons[37].setAttribute("style", "display: none");
	allButtons[38].setAttribute("style", "display: none");
	allButtons[39].setAttribute("style", "display: none");
	allButtons[40].setAttribute("style", "display: none");
	allButtons[41].setAttribute("style", "display: none");
	allButtons[42].setAttribute("style", "display: none");
	allButtons[43].setAttribute("style", "display: none");
	allButtons[44].setAttribute("style", "display: none");
	allButtons[45].setAttribute("style", "display: none");
	allButtons[46].setAttribute("style", "display: none");
	allButtons[47].setAttribute("style", "display: none");
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

// TODO
function enterVen() {
	// ! Create new buttons instead of using old ones
	let answerIs;
	const defaultAnswerVenStart = 4;
	const defaultAnswerVenEnd = 6;

	for (i = 0; i < allButtons.length; i++) {
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
	for (i = 0; i < allButtons.length; i++) {
		allButtons[i].remove();
	}

	allButtons[42] = createButton();
	blockOfButtons.append(allButtons[42]);
	allButtons[42].setAttribute("style", "display: block");
	allButtons[42].innerHTML = "Back";

	if (ELECTRICITY_IS_TURNDED_ON == true) {
		allButtons[40] = createButton();
		allButtons[41] = createButton();

		blockOfButtons.append(allButtons[40]);
		blockOfButtons.append(allButtons[41]);

		allButtons[40].setAttribute("style", "display: block");
		allButtons[41].setAttribute("style", "display: block");

		typeText(["There is an elevator\nYou want to come in?"]);
		allButtons[40].innerHTML = "Yes";
		allButtons[41].innerHTML = "No";

		allButtons[40].addEventListener("click", () => {
			doMove_2_elevator();
		}, options);

		allButtons[41].addEventListener("click", () => {
			doMove();
		}, options);

	} else {

		typeText(["Without electricity elevator won't work\nWe should get back\nand find out how to make it work?"]);

	}

	allButtons[42].addEventListener("click", () => {
		doMove();
	})



}

function toLab() {
	for (i = 0; i < allButtons.length; i++) {
		allButtons[i].remove();
	}

	allButtons[34] = createButton();
	allButtons[35] = createButton();
	allButtons[34].setAttribute("style", "display: block");
	allButtons[35].setAttribute("style", "display: block");
	blockOfButtons.append(allButtons[34]);
	blockOfButtons.append(allButtons[35]);

	typeText(["There is a lab\nYou want to come in?"]);

	allButtons[34].innerHTML = "Yes";
	allButtons[35].innerHTML = "No";

	allButtons[34].addEventListener("click", () => {
		if (aUser.user_hasSpanner == true) {
			// !
			// TODO
			if (aUser.user_hasKey_Card_lvl_1 == true)
				typeText(["Yes!\nNow it looks like you might be able to open some doors"]);
			else
				typeText(["It seems like we are done with this place"]);
			aUser.user_hasKey_Card_lvl_1 = true;
			toLab();
		} else {
			typeText(["Some kind of device covered by a grate.\nYou can't open it without a tool"]);
			allButtons[35].innerHTML = "Leave";
		}
	}, options);

	allButtons[35].addEventListener("click", () => {
		// !
		toElevator_3_2();
	}, options);

}

function toTheStairsOrVen() {
	for (i = 0; i < allButtons.length; i++) {
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

function goBack(message) {
	for (i = 0; i < allButtons.length; i++) {
		allButtons[i].remove();
	}
	// ! Can be a bug
	allButtons[6] = createButton();
	blockOfButtons.append(allButtons[6]);
	allButtons[6].innerHTML = "Ok";

	typeText(message);

	allButtons[6].addEventListener("click", () => {
		doMove();
	});
}

function toElectricalRoom() {
	for (i = 0; i < allButtons.length; i++) {
		allButtons[i].remove();
	}

	allButtons[12] = createButton();
	allButtons[13] = createButton();

	blockOfButtons.append(allButtons[12]);
	blockOfButtons.append(allButtons[13]);

	allButtons[12].innerHTML = "Yes";
	allButtons[13].innerHTML = "No";

	allButtons[12].setAttribute("style", "display: block");
	allButtons[13].setAttribute("style", "display: block");

	typeText(["Now let's turn on the light\n"]);

	allButtons[12].addEventListener("click", () => {
		ELECTRICITY_IS_TURNDED_ON = true;
		goBack(["Done"]);
	}, options);

	allButtons[13].addEventListener("click", () => {
		typeText(["It seems there is a dead end\nElevators won't work until\nwe turn on the electricity"]);

	}, options);

}

function inTheFreezingRoom() {
	for (i = 0; i < allButtons.length; i++) {
		allButtons[i].remove();
	}

	allButtons[24] = createButton();

	blockOfButtons.append(allButtons[24]);

	allButtons[24].setAttribute("style", "display: block");

	allButtons[24].innerHTML = "Nice";

	if (aUser.user_hasKey_Card_lvl_1 == true) {
		typeText(["So, we can rewrite a keycard here\nThis should be useful in the future"]);
		aUser.user_hasKey_Card_lvl_2 = true;
	} else {
		typeText(["So, we can rewrite a keycard here\nBut we don't have it"]);
	}
	allButtons[24].addEventListener("click", () => {
		doMove_2_elevator();
	}, options);
}

function inTheCP() {
	for (i = 0; i < allButtons.length; i++) {
		allButtons[i].remove();
	}

	allButtons[25] = createButton();

	blockOfButtons.append(allButtons[25]);

	allButtons[25].setAttribute("style", "display: block");

	allButtons[25].innerHTML = "Done";

	typeText(["The elevator is working now\nWe can move on the 1st floor"]);

	allButtons[25].addEventListener("click", () => {
		ELEVATOR_IS_TURNDED_ON = true;
		doMove_2_elevator();
	}, options);
}

function toTheCP() {
	for (i = 0; i < allButtons.length; i++) {
		allButtons[i].remove();
	}

	allButtons[22] = createButton();
	allButtons[23] = createButton();

	blockOfButtons.append(allButtons[20]);
	blockOfButtons.append(allButtons[21]);

	allButtons[22].setAttribute("style", "display: block");
	allButtons[23].setAttribute("style", "display: block");

	allButtons[22].innerHTML = "Yes";
	allButtons[23].innerHTML = "No";

	typeText(["It's kind of a weird room\nIt's full of different instruments and sensors\nI suppose one of them controls the elevator\nShall we switch it on?"]);

	allButtons[22].addEventListener("click", () => {
		inTheCP();
	}, options);

	allButtons[23].addEventListener("click", () => {
		// TODO
	}, options);
}

function toTheFreeze() {
	for (i = 0; i < allButtons.length; i++) {
		allButtons[i].remove();
	}

	allButtons[20] = createButton();
	allButtons[21] = createButton();

	blockOfButtons.append(allButtons[20]);
	blockOfButtons.append(allButtons[21]);

	allButtons[20].setAttribute("style", "display: block");
	allButtons[21].setAttribute("style", "display: block");

	allButtons[20].innerHTML = "Yes";
	allButtons[21].innerHTML = "No";

	typeText(["It's freezing!\nDo you want to come in?"]);

	allButtons[20].addEventListener("click", () => {
		inTheFreezingRoom();
	}, options);

	allButtons[21].addEventListener("click", () => {
		// TODO
	}, options);
}

function doMove_2_elevator() {
	let i;

	let defaultLengthBlockOfButtons = allButtons.length;
	let defaultCountOfChoiceToMove = 4;

	aUser.is_on_the_1_floor = false;
	aUser.is_on_the_2_floor = true;
	aUser.is_on_the_3_floor = false;

	for (i = 0; i < allButtons.length; i++) {
		allButtons[i].remove();
	}

	for (i = 17; i < 20; i++) {
		allButtons[i] = createButton();
	}

	for (i = 17; i < 20; i++) {
		blockOfButtons.append(allButtons[i]);
	}

	allButtons[17].setAttribute("style", "display: block");
	allButtons[18].setAttribute("style", "display: block");
	allButtons[19].setAttribute("style", "display: block");

	allButtons[17].innerHTML = "Right";
	allButtons[18].innerHTML = "Left";
	allButtons[19].innerHTML = "Back";

	typeText(["You are on the 2nd floor\nWhich side you want to go?"]);

	allButtons[17].addEventListener("click", () => {
		toTheFreeze();
	}, options);

	allButtons[18].addEventListener("click", () => {
		toTheCP();
	}, options);

	allButtons[19].addEventListener("click", () => {
		// TODO 	
	}, options);

}

function doMove_2_stairs() {
	let i;

	aUser.is_on_the_1_floor = false;
	aUser.is_on_the_2_floor = true;
	aUser.is_on_the_3_floor = false;

	for (i = 0; i < allButtons.length; i++) {
		allButtons[i].remove();
	}

	allButtons[10] = createButton();
	allButtons[11] = createButton();

	allButtons[10].setAttribute("style", "display: block");
	allButtons[11].setAttribute("style", "display: block");

	blockOfButtons.append(allButtons[10]);
	blockOfButtons.append(allButtons[11]);

	allButtons[10].innerHTML = "Yes";
	allButtons[11].innerHTML = "No";

	typeText(["There's a room here.\nI think the door's open,\ndo you want to come in?"]);

	allButtons[10].addEventListener("click", () => {
		toElectricalRoom();
	}, options);

	allButtons[11].addEventListener("click", () => {
		if (ELEVATOR_IS_TURNDED_ON == true) {
			doMove_1();
		} else {
			typeText(["It seems there is a dead end\nElevators won't work until\nwe turn on the electricity"]);
		}
	}, options);
}

function toRestRoom() {

}

function inTheGarden() {

}

function inTheLab_1_floor() {

}

function toGardenOrGLCP() {

	for (i = 0; i < allButtons.length; i++) {
		allButtons[i].remove();
	}

	allButtons[30] = createButton();
	allButtons[31] = createButton();

	allButtons[30].setAttribute("style", "display: block");
	allButtons[31].setAttribute("style", "display: block");

	blockOfButtons.append(allButtons[30]);
	blockOfButtons.append(allButtons[31]);

	allButtons[30].innerHTML = "To Garden";
	allButtons[31].innerHTML = "To Lab";

	allButtons[30].addEventListener("click", () => {
		inTheGarden();
	}, options);

	allButtons[31].addEventListener("click", () => {
		inTheLab_1_floor();
	}, options);

}

function toTheEscape() {
	// TODO Enemy

	if (aUser.user_hasKey_Card_lvl_3 == true) {

	}

}

function doMove_1() {

	aUser.is_on_the_1_floor = true;
	aUser.is_on_the_2_floor = false;
	aUser.is_on_the_3_flooor = false;

	for (i = 0; i < allButtons.length; i++) {
		allButtons[i].remove();
	}

	allButtons[26] = createButton();
	allButtons[27] = createButton();
	allButtons[28] = createButton();
	allButtons[29] = createButton();

	allButtons[26].setAttribute("style", "display: block");
	allButtons[27].setAttribute("style", "display: block");
	allButtons[28].setAttribute("style", "display: block");
	allButtons[29].setAttribute("style", "display: block");

	blockOfButtons.append(allButtons[26]);
	blockOfButtons.append(allButtons[27]);
	blockOfButtons.append(allButtons[28]);
	blockOfButtons.append(allButtons[29]);

	allButtons[26].innerHTML = "Straight";
	allButtons[27].innerHTML = "Right";
	allButtons[28].innerHTML = "Left";
	allButtons[29].innerHTML = "Back";

	//setTimeout(typeText, 5000, CHOOSE_DIRECTION);
	typeText(["We are on the 1st floor\nThere is a room in opposite side\nAlthought, there are 2 rooms on the right side\nand a corridor on the left\nWhere to go?"]);

	allButtons[26].addEventListener("click", () => {
		toRestRoom();
	}, options);

	allButtons[27].addEventListener("click", () => {
		toGardenOrGLCP();
	}, options);

	allButtons[28].addEventListener("click", () => {
		toTheEscape();
	}, options);

	allButtons[29].addEventListener("click", () => {
		doMove_2_elevator();
	}, options);


}

function takeSpanner() {
	let mes;

	for (i = 0; i < allButtons.length; i++) {
		allButtons[i].remove();
	}

	allButtons[16] = createButton();
	blockOfButtons.append(allButtons[16]);
	allButtons[16].setAttribute("style", "display: block");
	allButtons[16].innerHTML = "Yes";

	//typeText("[There is a spanner\nMay be it will work somewhere...]");

	if (aUser.user_hasSpanner == true) {
		mes = ["There's nothing else to do here"];
	} else {
		mes = ["There is a spanner\nMay be it will work somewhere..."];
	}

	typeText(mes);

	allButtons[16].addEventListener("click", () => {
		aUser.user_hasSpanner = true;
		toEnginierRoom();
	}, options);

}

function toEnginierRoom() {

	for (i = 0; i < allButtons.length; i++) {
		allButtons[i].remove();
	}

	allButtons[32] = createButton();
	allButtons[33] = createButton();
	blockOfButtons.append(allButtons[32]);
	blockOfButtons.append(allButtons[33]);
	allButtons[32].setAttribute("style", "display: block");
	allButtons[33].setAttribute("style", "display: block");
	allButtons[32].innerHTML = "Yes";
	allButtons[33].innerHTML = "No";

	typeText(["There is an enginiering room.\nYou want to come in?"]);

	allButtons[32].addEventListener("click", () => {
		if (ELECTRICITY_IS_TURNDED_ON == true)
			takeSpanner();
		else {
			typeText(["The door is locked\nGotta open this somehow..."]);
		}
	}, options);

	allButtons[33].addEventListener("click", () => {
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

	aUser.is_on_the_1_floor = false;
	aUser.is_on_the_2_floor = false;
	aUser.is_on_the_3_floor = true;

	for (i = 0; i < allButtons.length; i++) {
		allButtons[i].remove();
	}


	allButtons[36] = createButton();
	allButtons[37] = createButton();
	allButtons[38] = createButton();
	allButtons[39] = createButton();

	blockOfButtons.append(allButtons[36]);
	blockOfButtons.append(allButtons[37]);
	blockOfButtons.append(allButtons[38]);
	blockOfButtons.append(allButtons[39]);

	allButtons[36].setAttribute("style", "display: block");
	allButtons[37].setAttribute("style", "display: block");
	allButtons[38].setAttribute("style", "display: block");
	allButtons[39].setAttribute("style", "display: block");

	allButtons[36].innerHTML = "Straight";
	allButtons[37].innerHTML = "Right";
	allButtons[38].innerHTML = "Left";
	allButtons[39].innerHTML = "Back";

	//setTimeout(typeText, 5000, CHOOSE_DIRECTION);
	typeText(CHOOSE_DIRECTION);

	allButtons[36].addEventListener("click", () => {
		enterVen();
	}, options);

	allButtons[37].addEventListener("click", () => {
		toEnginierRoom();
	}, options);

	allButtons[38].addEventListener("click", () => {
		toTheStairsOrVen();
	}, options);

	allButtons[39].addEventListener("click", () => {
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
