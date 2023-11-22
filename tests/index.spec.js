import request from "supertest";
import app from "../src/app";

describe("GET /get-information", () => {
  test("Should respond with a 200 status code", async () => {
    const response = await request(app).get("/get-information").send();
    expect(response.statusCode).toBe(200);
  });

  test("Should response an array of info", async () => {
    const response = await request(app).get("/get-information").send();
    expect(response.body).toBeInstanceOf(Array);
  });
});

describe("POST /create-information", () => {
  describe("Create info with a title", () => {
    const newInfo = {
      title: "Some title",
    };

    test("Should respond with a 200 status code", async () => {
      const response = await request(app).post("/create-information").send(newInfo);
      expect(response.statusCode).toBe(200);
    });
  });
});