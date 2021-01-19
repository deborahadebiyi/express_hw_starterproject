const request = require("supertest");
const app = require("../app");

describe("Test the get book by id endpoint", () => {
    test("it should respond to the get method", async() => {
        const response = await request(app).get("/book/:book_id");
            expect(response.statusCode).toBe(200);
    });
}); // this is the async await way to do it and you may need the babel-preset-env package installed

describe("Test the get book by id endpoint", () => {
    test("it should respond to the get method", () => {
        return request(app)
            .get("/book/:book_id")
            .expect(200);
    });
});

describe("Dummy test", () => {
    it("tests that test aren't passing indiscriminately", () => {
        expect(1).toBe(2);
    })
})