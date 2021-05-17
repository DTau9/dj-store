export default function submitForm() {
	const form = document.getElementById('formCallback');
	const server = 'server.php';

	form.addEventListener('submit', function (e) {
		e.preventDefault();
		const formData = new FormData(form);

		const jsonObject = {};
		formData.forEach(function (value, key) {
			jsonObject[key] = value;
		});

		fetch(server, {
			method: 'POST',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify(jsonObject)
		})
			.then(data => data.text())
			.then(data => {
				alert(data);
			})
			.catch((err) => console.error(err))
			.finally(() => form.reset());
	});
}
