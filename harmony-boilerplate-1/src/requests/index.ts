/* eslint-disable */

export interface Api {
	getDevices: () => any;
}

export const createApi = (): Api => ({
	getDevices: async () => {
		return {
			status: 200,
			data: [
				{
					'id': 1,
					'name': "Samsung Canvas C2 5G",
					"price": 400,
					"description": "Single SIM 5G ultra wideband (mmWave) variant of Galaxy Note 20 Ultra flagship",
					"brand": "Samsung",
					"image": "/app1/assets/images/generic-mobile.jpg"
				},
				{
					"id": 2,
					"name": "Xiaomi Apollo",
					"price": 199.99,
					"description": "Top Chinese variant of Redmi K30S features multi-band FR1 5G NR connectivity",
					"brand": "Xiaomi",
					"image": "/app1/assets/images/generic-mobile.jpg"
				},
				{
					"id": 3,
					"name": "Samsung F415",
					"price": 649.99,
					"description": "Galaxy F41 (alias M21s) with 4 / 64 GB memory for Latin America",
					"brand": "Samsung",
					"image": "/app1/assets/images/generic-mobile.jpg"
				},
				{
					"id": 4,
					"name": "Xiaomi Angelica",
					"price": 1050.99,
					"description": "Low-end Redmi smartphone for India with 6.53-inch HD+ screen with notch",
					"brand": "Xiaomi",
					"image": "/app1/assets/images/generic-mobile.jpg"
				},
				{
					"id": 5,
					"name": "Samsung A426",
					"price": 399.99,
					"description": "SM-A426B Galaxy A42 5G 2020 Premium Edition Global Dual SIM TD-LTE",
					"brand": "Samsung",
					"image": "/app1/assets/images/generic-mobile.jpg"
				},
				{
					"id": 6,
					"name": "Xiaomi Angelica",
					"price": 579.99,
					"description": "Pocophone Poco C3 Dual SIM TD-LTE IN 32GB M2006C3MI",
					"brand": "Xiaomi",
					"image": "/app1/assets/images/generic-mobile.jpg"
				},
				{
					"id": 7,
					"name": "Apple iPhone 13",
					"price": 829.99,
					"description": "iPhone 12 5G A2399 Global Dual SIM TD-LTE 256GB",
					"brand": "Apple",
					"image": "/app1/assets/images/generic-mobile.jpg"
				},
				{
					"id": 8,
					"name": "Apple iPhone 13",
					"price": 829.99,
					"description": "iPhone 12 5G A2399 Global Dual SIM TD-LTE 256GB",
					"brand": "Apple",
					"image": "/app1/assets/images/generic-mobile.jpg"
				}
			]
		};
	}
});

export default createApi();
