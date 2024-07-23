// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = { price: 175 };

test('Request status code should be 200', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/products/7`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		
	} catch (error) {
	  console.error(error);
	  throw error;
	}
	   expect(response.status).toBe(200);
});

test('check response body and status to be 200 and true', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/products/7`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});

		const responseBody = await response.json();
		
	} catch (error) {
		console.error(error);
		throw error;
	}
	    expect(response.status).toBe(200);
		expect(responseBody.ok).toBe(true);
});