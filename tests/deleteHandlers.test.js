// eslint-disable-next-line no-undef
const config = require('../config');
const requestBodyPost = {
	"name": "string",
	"cardID": 1
  }

test('DELETE request: check response status code', async () => { 
	let actualStatus;
    try {
		const responsePost = await fetch(`${config.API_URL}/api/v1/kits`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBodyPost)
		});
		const responseBodyPost = responsePost.json();
		const kitID = responseBodyPost['id'];
		const response = await fetch(`${config.API_URL}/api/v1/kits/${kitID}`, {
			method: 'DELETE',
		});

       actualStatus = response.status
	} catch (error) { 
		console.error(error);
	} 
	   expect(actualStatus).toBe(200);
});
test('DELETE request: check response body', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits`, {
			method: 'DELETE',
		});

		const responseBody = await response.json();
		
	} catch (error) {
		console.error(error);
	}
	   expect(response.status).toBe(200);
});