const request = require("supertest");
const app = require("../server");

describe("User API", () => {
  it("should register a user", async () => {
    const res = await request(app).post("/api/users/register").send({
      name: "John Doe",
      email: "johndoe@example.com",
      password: "123456",
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body.message).toEqual("User registered successfully");
  });
});
