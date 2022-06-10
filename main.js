let isFlipped = false;

/*-- Download Card ------*/

function downloadCard() {
	let card = document.getElementById('districtCard');
	let cardFront = document.getElementById('cardFront');
	let cardBack = document.getElementById('cardBack');

	let scale = 2;

	if (isFlipped) {
		cardFront.classList.add('hide');
		cardBack.style.transform = 'rotateY(0)';
	} else {
		cardBack.classList.add('hide');
	}

	domtoimage
		.toPng(card, {
			width: card.clientWidth * scale,
			height: card.clientHeight * scale,
			style: {
				transform: 'scale(' + scale + ')',
				transformOrigin: 'top left',
			},
		})
		.then((dataUrl) => {
			domtoimage
				.toPng(card, {
					width: card.clientWidth * scale,
					height: card.clientHeight * scale,
					style: {
						transform: 'scale(' + scale + ')',
						transformOrigin: 'top left',
					},
				})
				.then((dataUrl2) => {
					var img = new Image();
					img.src = dataUrl2;
					downloadURI(dataUrl2, 'Loona-Island-Card.png');
					cardFront.classList.remove('hide');
					cardBack.style.transform = 'rotateY(180deg)';
					cardBack.classList.remove('hide');
					card.style.backgroundImage = 'none';
				});
		});
}

function downloadURI(uri, name) {
	var link = document.createElement('a');
	link.download = name;
	link.href = uri;
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
	delete link;
}

/*-- Flip Card ------*/
function flipCard() {
	var card = document.getElementById('districtCard');
	var btnFlip = document.getElementById('btnFlip');

	card.classList.toggle('flip');

	btnFlip.disabled = true;
	setTimeout(() => {
		btnFlip.disabled = false;
	}, 800);

	isFlipped = !isFlipped;
}

/*-- Change Version ------*/
var radios = document.querySelectorAll('input[type=radio][name="color"]');

function changeHandler(event) {
	let body = document.querySelector('body');

	if (this.value === 'version-heejin') {
		body.classList.remove('version-hyunjin');
		body.classList.remove('version-haseul');
		body.classList.remove('version-yeojin');
		body.classList.remove('version-vivi');
		body.classList.remove('version-kimlip');
		body.classList.remove('version-jinsoul');
		body.classList.remove('version-choerry');
		body.classList.remove('version-yves');
		body.classList.remove('version-chuu');
		body.classList.remove('version-gowon');
		body.classList.remove('version-hyeju');
		body.classList.remove('version-loona');
		document.getElementById('cardBackImg').src =
			'/assets/loona-card-back.png';
	} else if (this.value === 'version-hyunjin') {
		body.classList.add('version-hyunjin');
		body.classList.remove('version-haseul');
		body.classList.remove('version-yeojin');
		body.classList.remove('version-vivi');
		body.classList.remove('version-kimlip');
		body.classList.remove('version-jinsoul');
		body.classList.remove('version-choerry');
		body.classList.remove('version-yves');
		body.classList.remove('version-chuu');
		body.classList.remove('version-gowon');
		body.classList.remove('version-hyeju');
		body.classList.remove('version-loona');
		document.getElementById('cardBackImg').src =
			'/assets/loona-card-back.png';
	} else if (this.value === 'version-haseul') {
		body.classList.remove('version-hyunjin');
		body.classList.add('version-haseul');
		body.classList.remove('version-yeojin');
		body.classList.remove('version-vivi');
		body.classList.remove('version-kimlip');
		body.classList.remove('version-jinsoul');
		body.classList.remove('version-choerry');
		body.classList.remove('version-yves');
		body.classList.remove('version-chuu');
		body.classList.remove('version-gowon');
		body.classList.remove('version-hyeju');
		body.classList.remove('version-loona');
		document.getElementById('cardBackImg').src =
			'/assets/loona-card-back.png';
	} else if (this.value === 'version-yeojin') {
		body.classList.remove('version-hyunjin');
		body.classList.remove('version-haseul');
		body.classList.add('version-yeojin');
		body.classList.remove('version-vivi');
		body.classList.remove('version-kimlip');
		body.classList.remove('version-jinsoul');
		body.classList.remove('version-choerry');
		body.classList.remove('version-yves');
		body.classList.remove('version-chuu');
		body.classList.remove('version-gowon');
		body.classList.remove('version-hyeju');
		body.classList.remove('version-loona');
		document.getElementById('cardBackImg').src =
			'/assets/loona-card-back.png';
	} else if (this.value === 'version-vivi') {
		body.classList.remove('version-hyunjin');
		body.classList.remove('version-haseul');
		body.classList.remove('version-yeojin');
		body.classList.add('version-vivi');
		body.classList.remove('version-kimlip');
		body.classList.remove('version-jinsoul');
		body.classList.remove('version-choerry');
		body.classList.remove('version-yves');
		body.classList.remove('version-chuu');
		body.classList.remove('version-gowon');
		body.classList.remove('version-hyeju');
		body.classList.remove('version-loona');
		document.getElementById('cardBackImg').src =
			'/assets/loona-card-back.png';
	} else if (this.value === 'version-kimlip') {
		body.classList.remove('version-hyunjin');
		body.classList.remove('version-haseul');
		body.classList.remove('version-yeojin');
		body.classList.remove('version-vivi');
		body.classList.add('version-kimlip');
		body.classList.remove('version-jinsoul');
		body.classList.remove('version-choerry');
		body.classList.remove('version-yves');
		body.classList.remove('version-chuu');
		body.classList.remove('version-gowon');
		body.classList.remove('version-hyeju');
		body.classList.remove('version-loona');
		document.getElementById('cardBackImg').src =
			'/assets/loona-card-back.png';
	} else if (this.value === 'version-jinsoul') {
		body.classList.remove('version-hyunjin');
		body.classList.remove('version-haseul');
		body.classList.remove('version-yeojin');
		body.classList.remove('version-vivi');
		body.classList.remove('version-kimlip');
		body.classList.add('version-jinsoul');
		body.classList.remove('version-choerry');
		body.classList.remove('version-yves');
		body.classList.remove('version-chuu');
		body.classList.remove('version-gowon');
		body.classList.remove('version-hyeju');
		body.classList.remove('version-loona');
		document.getElementById('cardBackImg').src =
			'/assets/loona-card-back.png';
	} else if (this.value === 'version-choerry') {
		body.classList.remove('version-hyunjin');
		body.classList.remove('version-haseul');
		body.classList.remove('version-yeojin');
		body.classList.remove('version-vivi');
		body.classList.remove('version-kimlip');
		body.classList.remove('version-jinsoul');
		body.classList.add('version-choerry');
		body.classList.remove('version-yves');
		body.classList.remove('version-chuu');
		body.classList.remove('version-gowon');
		body.classList.remove('version-hyeju');
		body.classList.remove('version-loona');
		document.getElementById('cardBackImg').src =
			'/assets/loona-card-back.png';
	} else if (this.value === 'version-yves') {
		body.classList.remove('version-hyunjin');
		body.classList.remove('version-haseul');
		body.classList.remove('version-yeojin');
		body.classList.remove('version-vivi');
		body.classList.remove('version-kimlip');
		body.classList.remove('version-jinsoul');
		body.classList.remove('version-choerry');
		body.classList.add('version-yves');
		body.classList.remove('version-chuu');
		body.classList.remove('version-gowon');
		body.classList.remove('version-hyeju');
		body.classList.remove('version-loona');
		document.getElementById('cardBackImg').src =
			'/assets/loona-card-back.png';
	} else if (this.value === 'version-chuu') {
		body.classList.remove('version-hyunjin');
		body.classList.remove('version-haseul');
		body.classList.remove('version-yeojin');
		body.classList.remove('version-vivi');
		body.classList.remove('version-kimlip');
		body.classList.remove('version-jinsoul');
		body.classList.remove('version-choerry');
		body.classList.remove('version-yves');
		body.classList.add('version-chuu');
		body.classList.remove('version-gowon');
		body.classList.remove('version-hyeju');
		document.getElementById('cardBackImg').src =
			'/assets/loona-card-back.png';
	} else if (this.value === 'version-gowon') {
		body.classList.remove('version-hyunjin');
		body.classList.remove('version-haseul');
		body.classList.remove('version-yeojin');
		body.classList.remove('version-vivi');
		body.classList.remove('version-kimlip');
		body.classList.remove('version-jinsoul');
		body.classList.remove('version-choerry');
		body.classList.remove('version-yves');
		body.classList.remove('version-chuu');
		body.classList.add('version-gowon');
		body.classList.remove('version-hyeju');
		body.classList.remove('version-loona');
		document.getElementById('cardBackImg').src =
			'/assets/loona-card-back.png';
	} else if (this.value === 'version-hyeju') {
		body.classList.remove('version-hyunjin');
		body.classList.remove('version-haseul');
		body.classList.remove('version-yeojin');
		body.classList.remove('version-vivi');
		body.classList.remove('version-kimlip');
		body.classList.remove('version-jinsoul');
		body.classList.remove('version-choerry');
		body.classList.remove('version-yves');
		body.classList.remove('version-chuu');
		body.classList.remove('version-gowon');
		body.classList.add('version-hyeju');
		body.classList.remove('version-loona');
		document.getElementById('cardBackImg').src =
			'/assets/loona-card-back.png';
	} else if (this.value === 'version-loona') {
		body.classList.remove('version-hyunjin');
		body.classList.remove('version-haseul');
		body.classList.remove('version-yeojin');
		body.classList.remove('version-vivi');
		body.classList.remove('version-kimlip');
		body.classList.remove('version-jinsoul');
		body.classList.remove('version-choerry');
		body.classList.remove('version-yves');
		body.classList.remove('version-chuu');
		body.classList.remove('version-gowon');
		body.classList.remove('version-hyeju');
		body.classList.add('version-loona');
		document.getElementById('cardBackImg').src =
			'/assets/loona-card-cardBack.png';
	}
}

Array.prototype.forEach.call(radios, function (radio) {
	radio.addEventListener('change', changeHandler);
});

/*-- Image Input Preview ------*/
var reader = new FileReader();

reader.onload = function (e) {
	document.querySelector('#imager').setAttribute('src', e.target.result);
};

function readURL(input) {
	if (input.files && input.files[0]) {
		document.querySelector('#imager').style.visibility = 'visible';
		reader.readAsDataURL(input.files[0]);
	}
}

document.querySelector('#image-input').addEventListener('change', function () {
	readURL(this);
});

/*-- Auto Format Birthday ------*/
var cleave = new Cleave('.regDate', {
	date: true,
	delimiter: '-',
	datePattern: ['Y', 'm', 'd'],
});
