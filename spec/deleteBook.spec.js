const request = require("supertest");
const app = require("../src/app");

describe("Test the delete book endpoint", () => {
    test("it should respond to the delete method", async() => {
        const response = await request(app).delete("/book/:book_id");
            expect(response.statusCode).toBe(204);
    });
}); // this is the async await way to do it and you may need the babel-preset-env package installed

describe("Test the delete book endpoint", () => {
    test("it should respond to the delete method", () => {
        return request(app)
            .delete("/book/:book_id")
            .expect(204);
    });
});

describe("Dummy test", () => {
    it("tests that test aren't passing indiscriminately", () => {
        expect(1).toBe(2);
    })
})