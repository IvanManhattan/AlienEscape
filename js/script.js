
const POSITION_VARIANTS = [1, 2, 3, 4, 5, 6, 7, 8][1, 2, 3];
const DIRECTION_MOVE = ['Left', 'Top', 'Right', 'Straight'];
const HELLO_MESSAGE = [
	"Hello there\nLet's get outta here!\r\n"
];
const CHOOSE_DIRECTION = [
	"Which side you want to go?..\n"
];
const CHOOSE_ACTION = [
	"Are you sure you want to\nto go there?"
];
const FINE_MESSAGE = [
	"Fine..."
];
const CHOOSE_COLOR_OF_THE_WALL = [
	"Which color\nare walls\non your floor?"
];
const START_POSITION_POINT = 2;
const START_POSITION_FLOOR = 3;
class User {
	user_position = [START_POSITION_POINT][START_POSITION_FLOOR];
}


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

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max) - 100);
}

typeText(HELLO_MESSAGE);