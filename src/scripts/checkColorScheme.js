const tele = window.Telegram.WebApp;

let test = null;

test = tele.colorScheme;
// test = 'dark';

export default function chooseImageColor(lightImage, blackImage) {
	return test === 'dark' ? lightImage : blackImage;
}
