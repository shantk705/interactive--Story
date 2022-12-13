const canvas = document.getElementById('Matrix');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const katakana = 'ア?ァ?カ?サ?タ?ナ???ヤ?ャ?ラ??ガ?ザ?ダ?バ??イ?ィ?キ?シ?チ?ニ?ヒ?ミ?リ??ギ?ジ?ヂ?ビ?ピ?ウ?ゥ?ク?ス?ツ?ヌ??ム?ユ?ュ?ル??コ?ソ?ト?ノ?ホ?モ?ヨ?ョ?ロ?ヲ?ゴ?ゾ?ド?ボ?ポ?ヴ?ッ?ン?';
const latin = 'A?B?C?D?E?F?G?H/I?J?K?L?M?N?O?P?Q?R?S?T?U?V?W?X?Y?Z?';
const nums = '0?1?2?3??5?6??8?9?';

const alphabet = katakana + latin + nums;

const fontSize = 16;
const columns = canvas.width/fontSize;

const rainDrops = [];

for( let x = 0; x < columns; x++ ) {
	rainDrops[x] = 1;
}

const draw = () => {
	context.fillStyle = 'rgba(0, 0, 0, 0.025)';
	context.fillRect(0, 0, canvas.width, canvas.height);

	context.fillStyle = '#0F0';
	context.font = fontSize + 'px monospace';

	for(let i = 0; i < rainDrops.length; i++)
	{
		const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
		context.fillText(text, i*fontSize, rainDrops[i]*fontSize);

		if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.975){
			rainDrops[i] = 0;
        }
		rainDrops[i]++;
	}
};

setInterval(draw, 30);