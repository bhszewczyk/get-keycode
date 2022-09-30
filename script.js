const instruction = document.querySelector('.start');
const resultBox = document.querySelector('.results');
const resultEls = document.querySelectorAll('.results .key');

window.addEventListener('keyup', displayCodes);

function displayCodes(e) {
	instruction.classList.add('hide');
	resultBox.classList.remove('hide');

	resultEls[0].innerText = e.key;
	resultEls[1].innerText = e.keyCode;
	resultEls[2].innerText = e.code;
}
