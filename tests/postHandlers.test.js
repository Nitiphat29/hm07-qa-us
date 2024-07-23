// eslint-disable-next-line no-undef
const config = require('../config');

test('Request status code should return 200', async () => {
	let actualResponseCode; 
	const requestBody = { 
		products: [ 
			{ id: 5, quantity: 1 },
			{ id: 4, quantity: 5 }
		]
	};
    try { 
		const response = await fetch(`${config.API_URL}/api/v1/warehouses/check`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualResponseCode = response.status;
	} catch (error) {
		console.error(error);
		throw error;
	}

	expect(actualResponseCode).toBe(200);
});

test('check the respose body should contains the valuse match the expected results', async () => {
	let actualResponseBody; 
	const requestBody = { 
		products: [ 
			{ id: 5, quantity: 1 },
			{ id: 4, quantity: 5 }
		]
	};

    try { 
		const response = await fetch(`${config.API_URL}/api/v1/warehouses/check`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
		throw error;
	}
	expect(actualResponseBody["Everything You Need"]["Sprite Soft Drink"]).toBeTruthy();
	expect(actualResponseBody["Everything You Need"]["Fruit Power Juice - Litchi"]).toBeFalsy();
});
