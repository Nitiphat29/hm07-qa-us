// eslint-disable-next-line no-undef
const config = require('../config');

test('Request status code should be 200', async () => {
	let actualResponseCode;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		actualResponseCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseCode).toBe(200);
});


test('check the respose body should contains the valuse match the expected results', async () => {
	let actualResponseBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody[0]["name"]).toBe("Everything You Need");
});
