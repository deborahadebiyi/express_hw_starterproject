const request = require("supertest");
const app = require("../src/app");

describe("Test the create books endpoint", () => {
    test("it should respond to the post method", async() => {
        const response = await request(app).post("/books");
            expect(response.statusCode).toBe(201);
    });
}); // this is the async await way to do it and you may need the babel-preset-env package installed

describe("Test the create books endpoint", () => {
    test("it should respond to the post method", () => {
        return request(app)
            .post("/books")
            .expect(201);
    });
});

describe("Dummy test", () => {
    it("tests that test aren't passing indiscriminately", () => {
        expect(1).toBe(2);
    })
})