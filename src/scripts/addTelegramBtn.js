const tg = window.Telegram.WebApp;

export default function addTelegramBtn(title, method) {
	tg.MainButton.show();
	tg.MainButton.setText(title);
	method && tg.MainButton.onClick(method);
}
