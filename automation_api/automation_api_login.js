const request_url = require("supertest")("http://barru.pythonanywhere.com");
const assert = require("chai").expect;

describe("Login Feature", function () { 
  it("Success Login, with valid email and password", async function () { 
    const response = await request_url 
      .post("/login")
      .send({ email: "jagocoba@gmail.com", password: "jago123" });

      const isi_data = response.body;
    
      assert(isi_data).to.include.keys("credentials", "data", "message", "status"); 
      assert(response.body.data).to.eql('Welcome michael');
      assert(response.body.message).to.eql('Anda Berhasil Login');
      assert(response.body.status).to.eql('SUCCESS_LOGIN');
      assert(response.status).to.eql(200);

  });

  it("Failed Login with empty email & valid password", async function () { 
    const response = await request_url 
      .post("/login")
      .send({ email: "", password: "jago123" });

      const isi_data = response.body;
    
      assert(isi_data).to.include.keys("data", "message", "status"); 
      assert(response.body.data).to.eql("Email tidak valid");
      assert(response.body.message).to.eql('Cek kembali email anda');
      assert(response.body.status).to.eql('FAILED_LOGIN');
      assert(response.status).to.eql(420);
  });

  it("Failed Login with empty email & empty password", async function () { 
    const response = await request_url 
      .post("/login")
      .send({ email: "", password: "" });

      const isi_data = response.body;
    
      assert(isi_data).to.include.keys("data", "message", "status"); 
      assert(response.body.data).to.eql("Email tidak valid");
      assert(response.body.message).to.eql('Cek kembali email anda');
      assert(response.body.status).to.eql('FAILED_LOGIN');
      assert(response.status).to.eql(420);
  });

  it("Failed Login with valid email & empty password", async function () { 
    const response = await request_url 
      .post("/login")
      .send({ email: "jagocoba@gmail.com", password: "" });

      const isi_data = response.body;
    
      assert(isi_data).to.include.keys("data", "message", "status"); 
      assert(response.body.data).to.eql("User's not found");
      assert(response.body.message).to.eql('Email atau Password Anda Salah');
      assert(response.body.status).to.eql('FAILED_LOGIN');
      assert(response.status).to.eql(420);
  });

  it("Failed Login with email not registered & password random", async function () { 
    const response = await request_url 
      .post("/login")
      .send({ email: "ikase.p@gmail.com", password: "sjdhakjsdhd" });

      const isi_data = response.body;
    
      assert(isi_data).to.include.keys("data", "message", "status"); 
      assert(response.body.data).to.eql("User's not found");
      assert(response.body.message).to.eql('Email atau Password Anda Salah');
      assert(response.body.status).to.eql('FAILED_LOGIN');
      assert(response.status).to.eql(420);
  });

  it("Failed Login with valid email & invalid password", async function () { 
    const response = await request_url 
      .post("/login")
      .send({ email: "jagocoba@gmail.com", password: "Abcd1234" });

      const isi_data = response.body;
    
      assert(isi_data).to.include.keys("data", "message", "status"); 
      assert(response.body.data).to.eql("User's not found");
      assert(response.body.message).to.eql('Email atau Password Anda Salah');
      assert(response.body.status).to.eql('FAILED_LOGIN');
      assert(response.status).to.eql(420);
  });

  it("Failed Login with invalid email & valid password", async function () { 
    const response = await request_url 
      .post("/login")
      .send({ email: "jagocoba26126126@gmail.com", password: "jago123" });

      const isi_data = response.body;
    
      assert(isi_data).to.include.keys("data", "message", "status"); 
      assert(response.body.data).to.eql("User's not found");
      assert(response.body.message).to.eql('Email atau Password Anda Salah');
      assert(response.body.status).to.eql('FAILED_LOGIN');
      assert(response.status).to.eql(420);
  });

  it("Failed Login with email over max length", async function () { 
    const response = await request_url 
      .post("/login")
      .send({ email: "jagocobajagocobajagocobajagocobajagocobajagocobajagocoba@gmail.com", password: "jago123" });

      const isi_data = response.body;
    
      assert(isi_data).to.include.keys("data", "message", "status"); 
      assert(response.body.data).to.eql('Email/Password melebihin maksimal karakter');
      assert(response.body.message).to.eql('Gagal Login');
      assert(response.body.status).to.eql('FAILED_LOGIN');
      assert(response.status).to.eql(420);
  });

  it("Failed Login with password over max length", async function () { 
    const response = await request_url 
      .post("/login")
      .send({ email: "jagocoba@gmail.com", password: "jago123jago123jago123jago123jago123" });

      const isi_data = response.body;
    
      assert(isi_data).to.include.keys("data", "message", "status"); 
      assert(response.body.data).to.eql('Email/Password melebihin maksimal karakter');
      assert(response.body.message).to.eql('Gagal Login');
      assert(response.body.status).to.eql('FAILED_LOGIN');
      assert(response.status).to.eql(420);
  });

  it("Failed Login with Method GET", async function () {
    const response = await request_url
    .get("/login") 
    .send({ email: 'jagocoba@gmail.com', password: 'jago123' });

    assert(response.status).to.eql(405);
  });

  it("Failed Login with Method PUT", async function () {
    let random_text = Math.random().toString(36).substring(7);
    const response = await request_url
    .put("/login") 
    .send({ email: 'jagocoba@gmail.com', password: 'jago123' });

    assert(response.status).to.eql(405);
  });

  it("Failed Login with Method PATCH", async function () {
    let random_text = Math.random().toString(36).substring(7);
    const response = await request_url
    .patch("/login") 
    .send({ email: 'jagocoba@gmail.com', password: 'jago123' });

    assert(response.status).to.eql(405);
  });



});