const request_url = require("supertest")("http://barru.pythonanywhere.com");
const assert = require("chai").expect;

describe("Register Feature", function () { 
  it("Success Register", async function () { 
    let random_email = Math.random().toString(36).substring(7); 
    const response = await request_url 
     .post("/register") 
     .send({ email: random_email + "@gmail.com", password: "blablabla", name: "blablabla" }); 

      const isi_data = response.body;
    
      assert(isi_data).to.include.keys("data", "message", "status"); 
      assert(response.body.data).to.eql('berhasil');
      assert(response.body.message).to.eql('created user!');
      assert(response.body.status).to.eql('SUCCESS_REGISTER');
      assert(response.status).to.eql(200);

  });

  it("Failed Register with empty email", async function () { 
    const response = await request_url 
     .post("/register") 
     .send({ email: "", password: "jago1234", name: "michael" }); 

      const isi_data = response.body;
    
      assert(isi_data).to.include.keys("data", "message", "status"); 
      assert(response.body.data).to.eql('Email/Username/Password tidak boleh kosong');
      assert(response.body.message).to.eql('Gagal Registrasi');
      assert(response.body.status).to.eql('FAILED_REGISTER');
      assert(response.status).to.eql(420);

  });

  it("Failed Register with empty password", async function () { 
    let random_email = Math.random().toString(36).substring(7); 
    const response = await request_url 
     .post("/register") 
     .send({ email: random_email + "@gmail.com", password: "", name: "blablabla" }); 

      const isi_data = response.body;
    
      assert(isi_data).to.include.keys("data", "message", "status"); 
      assert(response.body.data).to.eql('Email/Username/Password tidak boleh kosong');
      assert(response.body.message).to.eql('Gagal Registrasi');
      assert(response.body.status).to.eql('FAILED_REGISTER');
      assert(response.status).to.eql(420);

  });

  it("Failed Register with empty name", async function () { 
    let random_email = Math.random().toString(36).substring(7); 
    const response = await request_url 
     .post("/register") 
     .send({ email: random_email + "@gmail.com", password: "blablabla", name: "" }); 

      const isi_data = response.body;
    
      assert(isi_data).to.include.keys("data", "message", "status"); 
      assert(response.body.data).to.eql('Email/Username/Password tidak boleh kosong');
      assert(response.body.message).to.eql('Gagal Registrasi');
      assert(response.body.status).to.eql('FAILED_REGISTER');
      assert(response.status).to.eql(420);

  });

  it("Failed Register with all request body is empty", async function () {  
    const response = await request_url 
     .post("/register") 
     .send({ email: "", password: "", name: "" }); 

      const isi_data = response.body;
    
      assert(isi_data).to.include.keys("data", "message", "status"); 
      assert(response.body.data).to.eql('Email/Username/Password tidak boleh kosong');
      assert(response.body.message).to.eql('Gagal Registrasi');
      assert(response.body.status).to.eql('FAILED_REGISTER');
      assert(response.status).to.eql(420);

  });

  it("Failed Register with duplicate email", async function () {  
    const response = await request_url 
     .post("/register") 
     .send({ email: "acbcaojs123456", password: "abcde1235", name: "jonas" }); 

      const isi_data = response.body;
    
      assert(isi_data).to.include.keys("data", "message", "status"); 
      assert(response.body.data).to.eql('Email tidak valid');
      assert(response.body.message).to.eql('Cek kembali email anda');
      assert(response.body.status).to.eql('FAILED_REGISTER');
      assert(response.status).to.eql(420);

  });

  it("Failed Register with invalid email", async function () {  
    const response = await request_url 
     .post("/register") 
     .send({ email: "acbcaojs123456", password: "abcde1235", name: "jonas" }); 

      const isi_data = response.body;
    
      assert(isi_data).to.include.keys("data", "message", "status"); 
      assert(response.body.data).to.eql('Email tidak valid');
      assert(response.body.message).to.eql('Cek kembali email anda');
      assert(response.body.status).to.eql('FAILED_REGISTER');
      assert(response.status).to.eql(420);

  });

  it("Failed Register with symbol in password", async function () {  
    const response = await request_url 
     .post("/register") 
     .send({ email: "jagocoba51@gmail.com", password: "!#$%&'()", name: "michaele" }); 

      const isi_data = response.body;
    
      assert(isi_data).to.include.keys("data", "message", "status"); 
      assert(response.body.data).to.eql('Nama atau password tidak valid');
      assert(response.body.message).to.eql('Tidak boleh mengandung symbol');
      assert(response.body.status).to.eql('FAILED_REGISTER');
      assert(response.status).to.eql(420);

  });

  it("Failed Register with symbol in name", async function () {  
    const response = await request_url 
     .post("/register") 
     .send({ email: "jagocoba51@gmail.com", password: "jago12345", name: "!#$%&'()" }); 

      const isi_data = response.body;
    
      assert(isi_data).to.include.keys("data", "message", "status"); 
      assert(response.body.data).to.eql('Nama atau password tidak valid');
      assert(response.body.message).to.eql('Tidak boleh mengandung symbol');
      assert(response.body.status).to.eql('FAILED_REGISTER');
      assert(response.status).to.eql(420);

  });

  it("Failed Register with email over max length", async function () {  
    const response = await request_url 
     .post("/register") 
     .send({ email: "LoremipsumdolorsitametconsectetueradipiscingelitAeneancommodoligulaegetdolorAeneanmassaCumsociisnatoquepenatibusetmagnisdisparturientmontesnasceturridiculusmusDonecquamfelisultriciesnecpellentesqueeupretiumquissemNullaconsequatmassaquisenimDonecpedejustofringillavelaliquetnecvulputateegetarcuInenimjustorhoncusutimperdietavenenatisvitaejustoNullamdictumfeliseupedemollispretiumIntegertincidunt@gmail.com", password: "jago12345", name: "!#$%&'()" }); 

      const isi_data = response.body;
    
      assert(isi_data).to.include.keys("data", "message", "status"); 
      assert(response.body.data).to.eql('Email/Username/Password melebihin maksimal karakter');
      assert(response.body.message).to.eql('Gagal Registrasi');
      assert(response.body.status).to.eql('FAILED_REGISTER');
      assert(response.status).to.eql(420);


  });

  it("Failed Register with password over max length", async function () {  
    const response = await request_url 
     .post("/register") 
     .send({ email: "jagocoba53@gmail.com", password: "Loremipsumdolorsitamet,consectetueradipiscingelit.Aeneancommodoligulaegetdolor.Aeneanmassa.Cumsociisnatoquepenatibusetmagnisdisparturientmontes,nasceturridiculusmus.Donecquamfelis,ultriciesnec,pellentesqueeu,pretiumquis,sem.Nullaconsequatmassaquisenim.Donecpedejusto,fringillavel,aliquetnec,vulputateeget,arcu.Inenimjusto,rhoncusut,imperdieta,venenatisvitae,justo.Nullamdictumfeliseupedemollispretium.Integertincidunt", name: "michales" }); 

      const isi_data = response.body;
    
      assert(isi_data).to.include.keys("data", "message", "status"); 
      assert(response.body.data).to.eql('Email/Username/Password melebihin maksimal karakter');
      assert(response.body.message).to.eql('Gagal Registrasi');
      assert(response.body.status).to.eql('FAILED_REGISTER');
      assert(response.status).to.eql(420);


  });

    it("Failed Register with name over max length", async function () {  
    const response = await request_url 
     .post("/register") 
     .send({ email: "jagocoba53@gmail.com", password: "jago12345", name: "Loremipsumdolorsitamet,consectetueradipiscingelit.Aeneancommodoligulaegetdolor.Aeneanmassa.Cumsociisnatoquepenatibusetmagnisdisparturientmontes,nasceturridiculusmus.Donecquamfelis,ultriciesnec,pellentesqueeu,pretiumquis,sem.Nullaconsequatmassaquisenim.Donecpedejusto,fringillavel,aliquetnec,vulputateeget,arcu.Inenimjusto,rhoncusut,imperdieta,venenatisvitae,justo.Nullamdictumfeliseupedemollispretium.Integertincidunt" }); 

      const isi_data = response.body;
    
      assert(isi_data).to.include.keys("data", "message", "status"); 
      assert(response.body.data).to.eql('Email/Username/Password melebihin maksimal karakter');
      assert(response.body.message).to.eql('Gagal Registrasi');
      assert(response.body.status).to.eql('FAILED_REGISTER');
      assert(response.status).to.eql(420);


  });

  it("Failed Register with Method GET", async function () {
    let random_email = Math.random().toString(36).substring(7); 
    const response = await request_url 
     .get("/register") 
     .send({ email: random_email + "@gmail.com", password: "blablabla", name: "blablabla" }); 


    assert(response.status).to.eql(405);
  });

  it("Failed Register with Method PUT", async function () {
    let random_email = Math.random().toString(36).substring(7); 
    const response = await request_url 
     .put("/register") 
     .send({ email: random_email + "@gmail.com", password: "blablabla", name: "blablabla" }); 


    assert(response.status).to.eql(405);
  });

  it("Failed Register with Method PATCH", async function () {
    let random_email = Math.random().toString(36).substring(7); 
    const response = await request_url 
     .patch("/register") 
     .send({ email: random_email + "@gmail.com", password: "blablabla", name: "blablabla" }); 


    assert(response.status).to.eql(405);
  });
  
});