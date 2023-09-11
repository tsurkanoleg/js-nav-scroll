const buttonScroll = document.getElementById(`buttonScroll`);
buttonScroll.addEventListener(`click`, scrollTop)

function scrollTop() {
	scrollTo({
		top: 0,
		behavior: 'smooth',
	})
}

setInterval(() => {
	const position = scrollY;
	if(position > window.innerHeight) {
		buttonScroll.style.display = `block`;
	} else {
		buttonScroll.style.display = `none`;
	}
}, 500)