const request = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/database/connection");

describe("ONG", () => {
  beforeEach(async () => {
    //importante zerar o banco de testes antes de realizar novos testes
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it("it should be able to create a new ONG", async () => {
    //em alguns cenários, será necessário enviar também os headers na requisição
    const response = await request(app)
      .post("/ongs")
      .send({
        name: "APAD",
        email: "bugasmarcondes@gmail.com",
        whatsapp: "5511970817791",
        city: "Rio do Sul",
        uf: "SC"
      });

    expect(response.body).toHaveProperty("id");
    expect(response.body.id).toHaveLength(8);
  });
});
