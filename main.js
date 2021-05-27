const sounds = {
	a: "clap",
	s: "hi_hat",
	d: "kick",
	f: "open_hat",
	g: "boom",
	h: "ride",
	j: "snare",
	k: "tom",
	l: "tink",
};

// Add event listeners
Object.keys(sounds).map((i) => {
	const button = document.getElementById(sounds[i]);
	button.addEventListener("click", () => {
		let audio = new Audio(`./sounds/${sounds[i]}.wav`);
		audio.play();

		button.classList.add("playing");
	});

	button.addEventListener("transitionend", () => {
		button.classList.remove("playing");
	});
});

document.body.addEventListener("keydown", (e) => {
	if (Object.keys(sounds).includes(e.key)) {
		let audio = new Audio(`./sounds/${sounds[e.key.toLocaleLowerCase()]}.wav`);
		audio.play();

		const key_card = document.getElementById(sounds[e.key]);
		key_card.classList.add("playing");
	}
});
