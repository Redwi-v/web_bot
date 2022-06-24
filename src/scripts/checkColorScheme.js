const tele = window.Telegram.WebApp;

let test = null;

// test = tele.colorScheme;
test = tele.colorScheme;

export default function chooseImageColor(lightImage, blackImage) {
	return test === 'dark' ? lightImage : blackImage;
}
