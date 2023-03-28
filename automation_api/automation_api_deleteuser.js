const request_url = require("supertest")("http://barru.pythonanywhere.com");
const assert = require("chai").expect;

let token_user1 = ""
describe("Login to get a valid token value", function () { 
  it("Get Token", async function () { 
    const response = await request_url 
     .post("/login") 
     .send({ email: "jagocoba108@gmail.com", password: "jago1234" });

      token_user1 = response.body.credentials.access_token;

  });

});

let token_user2 = ""
describe("Login to get a valid token value", function () { 
  it("Get Token", async function () { 
    const response = await request_url 
     .post("/login") 
     .send({ email: "jagocoba109@gmail.com", password: "jago1234" });

      token_user2 = response.body.credentials.access_token;

  });

});

let token_user3 = ""
describe("Login to get a valid token value", function () { 
  it("Get Token", async function () { 
    const response = await request_url 
     .post("/login") 
     .send({ email: "jagocoba106@gmail.com", password: "jago1234" });

      token_user3 = response.body.credentials.access_token;

  });

});

  describe("Delete Profile", function () { 
    it("Success Delete User", async function () { 
      const response = await request_url 
        .delete("/delete-user")
        .set({ Authorization: token_user1})
        .send({ email: "jagocoba100@gmail.com", password: "jago1234", name: "jobako"});
      
        const isi_data = response.body;
      
        assert(isi_data).to.include.keys("data", "message", "status"); 
        assert(response.body.data).to.eql('Sedih melihatmu pergi jobako');
        assert(response.body.message).to.eql('Berhasil Hapus User');
        assert(response.body.status).to.eql('SUCCESS_DELETE_PROFILE');
        assert(response.status).to.eql(200);
  
    });

    it("Success Delete User Success Email,Password,Name", async function () { 
      const response = await request_url 
        .delete("/delete-user")
        .set({ Authorization: token_user2})
        .send({ email: "jagocoba101@gmail.com", password: "jago1234", name: "jobako"});
      
      
        assert(response.body.data).to.eql('Sedih melihatmu pergi jobako');
        assert(response.body.message).to.eql('Berhasil Hapus User');
        assert(response.body.status).to.eql('SUCCESS_DELETE_PROFILE');
        assert(response.status).to.eql(200);
  
    });
    
    it("Failed Delete User Password Wrong", async function () { 
      const response = await request_url 
        .delete("/delete-user")
        .set({ Authorization: token_user3})
        .send({ password: "jago12345"});
      
      
        assert(response.body.data).to.eql('Salah Password');
        assert(response.body.message).to.eql('Gagal Hapus Akun');
        assert(response.body.status).to.eql('FAILED_DELETE_PROFILE');
        assert(response.status).to.eql(420);
  
    });

    it("Failed Delete User Password Empty", async function () { 
      const response = await request_url 
        .delete("/delete-user")
        .set({ Authorization: token_user3})
        .send({ password: ""});
      
      
        assert(response.body.data).to.eql('Email/Username/Password tidak boleh kosong');
        assert(response.body.message).to.eql('Gagal Hapus Akun');
        assert(response.body.status).to.eql('FAILED_DELETE_PROFILE');
        assert(response.status).to.eql(420);
  
    });

    it("Failed Delete User Token Wrong", async function () { 
      const response = await request_url 
        .delete("/delete-user")
        .set({ Authorization: token_user3 + 123})
        .send({ password: "jago123yuk"});
      
      
        assert(response.body.data).to.eql("User's not found");
        assert(response.body.message).to.eql('Email atau Password Anda Salah');
        assert(response.body.status).to.eql('FAILED_LOGIN');
        assert(response.status).to.eql(420);

  
    });

    it("Failed Delete User with Email", async function () { 
      const response = await request_url 
        .delete("/delete-user")
        .set({ Authorization: token_user3})
        .send({ email: "jagocobayuk@gmail.com"});
      
        assert(response.status).to.eql(420);
  
    });

    it("Failed Delete User with Name", async function () { 
      const response = await request_url 
        .delete("/delete-user")
        .set({ Authorization: token_user2})
        .send({ name: "michaelyuk"});
      
        assert(response.status).to.eql(420);
  
    });

    



  });

  
  


  
