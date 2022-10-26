const request = require("supertest")
//const baseURL = "http://localhost:5050"
const baseURL = "https://app-demo-firebase.herokuapp.com/"
const idx = require('./index');

test('This is my demo project', async () => {
    const response = await request(baseURL).get("/api");
    expect(response.text).toBe('This is my demo project');
});