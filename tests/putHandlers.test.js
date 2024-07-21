// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = { 
	price: 175
}

test('PUT request: check response status code', async () => {
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

test('PUT request: check response body', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/products/7`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});

		const responseBody = await response.json();
		expect(response.status).toBe(200);
		expect(responseBody.ok).toBe(true);
	} catch (error) {
		console.error(error);
		throw error;
	}
});