export default function handlerTooltip() {
	const tooltip = document.getElementById('tooltip');

	document.addEventListener('click', (e) => {
		if (e.target.id === 'tooltip') {
			tooltip.classList.add('active');
		}
		if (e.target.className === 'tooltip__cross-close' ||
			e.target.closest('#tooltip') === null
		) {
			tooltip.classList.remove('active');
		}
	})
}
