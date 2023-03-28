const request_url = require("supertest")("http://barru.pythonanywhere.com");
const assert = require("chai").expect;

let token = ""
describe("Login to get a valid token value", function () { 
  it("Get Token", async function () { 
    const response = await request_url 
     .post("/login") 
     .send({ email: "jagocoba@gmail.com", password: "jago123" });

      token = response.body.credentials.access_token;

  });

});

  describe("Update Profile", function () { 
    it("Success Update Profile Name", async function () { 
      const response = await request_url 
        .put("/update-profile")
        .set({ Authorization: token})
        .send({ name: "tomy hans"});
      
        const isi_data = response.body;
      
        assert(isi_data).to.include.keys("data", "message", "status"); 
        assert(response.body.data).to.eql('Username Anda menjadi tomy hans');
        assert(response.body.message).to.eql('Berhasil Perbarui Profile');
        assert(response.body.status).to.eql('SUCCESS_UPDATE_PROFILE');
        assert(response.status).to.eql(200);
  
    });

    it("Success Update Profile Password", async function () { 
      const response = await request_url 
        .put("/update-profile")
        .set({ Authorization: token})
        .send({ password: "jago123456"});
      
        const isi_data = response.body;
      
        assert(response.status).to.eql(200);
  
    });

    it("Success Update Profile Email", async function () { 
      const response = await request_url 
        .put("/update-profile")
        .set({ Authorization: token})
        .send({ email: "jagocobayuk1251@gmail.com"});
      
        const isi_data = response.body;
      
        assert(response.status).to.eql(200);
  
    });

    it("Failed  Update Profile Name Over Max Length", async function () { 
      const response = await request_url 
        .put("/update-profile")
        .set({ Authorization: token})
        .send({ name: "tomy hansssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss"});
      
        const isi_data = response.body;
      
        assert(isi_data).to.include.keys("data", "message", "status"); 
        assert(response.body.data).to.eql('Username melebihin maksimal karakter');
        assert(response.body.message).to.eql('Gagal Update Profile');
        assert(response.body.status).to.eql('FAILED_UPDATE_PROFILE');
        assert(response.status).to.eql(420);
  
    });

    it("Failed  Update Profile Name Empty", async function () { 
      const response = await request_url 
        .put("/update-profile")
        .set({ Authorization: token})
        .send({ name: ""});
      
        const isi_data = response.body;
      
        assert(isi_data).to.include.keys("data", "message", "status"); 
        assert(response.body.data).to.eql('Username tidak boleh kosong');
        assert(response.body.message).to.eql('Gagal Update Profile');
        assert(response.body.status).to.eql('FAILED_UPDATE_PROFILE');
        assert(response.status).to.eql(420);
  
    });

  });

  
  


  
