const request_url = require("supertest")("http://barru.pythonanywhere.com");
const assert = require("chai").expect;

describe("List Feature", function () { 
  it("Success List User Success Without Params", async function () { 
    const response = await request_url 
      .get("/list-user")

      const isi_data = response.body;
    
      assert(isi_data).to.include.keys("data", "message", "pagination", "status");
      assert(response.body.message).to.eql('List of registered users'); 
      assert(response.body.status).to.eql('SUCCESS_USER_LIST'); 
      assert(response.status).to.eql(200);

  });

  it("Success List User Success Filter Username", async function () { 
    const response = await request_url 
      .get("/list-user")
      .query({username : "michael"});

      const isi_data = response.body;
    
      assert(isi_data).to.include.keys("data", "message", "pagination", "status");
      assert(response.body.message).to.eql('List of registered users'); 
      assert(response.body.status).to.eql('SUCCESS_USER_LIST'); 
      assert(response.body.data[0].email).to.eql('jagocoba@gmail.com'); 
      assert(response.body.data[0].username).to.eql('michael');
      assert(response.status).to.eql(200);

  });

  it("Success List User Success Filter Email", async function () { 
    const response = await request_url 
      .get("/list-user")
      .query({email : "jagocoba@gmail.com"});

      const isi_data = response.body;
    
      assert(isi_data).to.include.keys("data", "message", "pagination", "status");
      assert(response.body.message).to.eql('List of registered users'); 
      assert(response.body.status).to.eql('SUCCESS_USER_LIST'); 
      assert(response.body.data[0].email).to.eql('jagocoba@gmail.com'); 
      assert(response.body.data[0].username).to.eql('michael');
      assert(response.status).to.eql(200);

  });


  it("Success List User Success Match username & email", async function () { 
    const response = await request_url 
      .get("/list-user")
      .query({username : "michael", email : "jagocoba@gmail.com"});

      const isi_data = response.body;
    
      assert(isi_data).to.include.keys("data", "message", "pagination", "status");
      assert(response.body.message).to.eql('List of registered users'); 
      assert(response.body.status).to.eql('SUCCESS_USER_LIST'); 
      assert(response.body.data[0].email).to.eql('jagocoba@gmail.com'); 
      assert(response.body.data[0].username).to.eql('michael');
      assert(response.status).to.eql(200);

  });

  it("Success List User Success Filter & Pagination", async function () { 
    const response = await request_url 
      .get("/list-user")
      .query({username : "test", page : 5, limit : 26});

      const isi_data = response.body;
    
      assert(isi_data).to.include.keys("data", "message", "pagination", "status");
      assert(response.body.message).to.eql('List of registered users'); 
      assert(response.body.status).to.eql('SUCCESS_USER_LIST'); 
      assert(response.body.pagination.current_page).to.eql(5); 
      assert(response.body.pagination.limit_per_page).to.eql(26); 
      assert(response.status).to.eql(200);

  });

  it("Failed List with Method POST", async function () {
    const response = await request_url 
      .post("/list-user")
      .query({username : "michael", email : "jagocoba@gmail.com"}); 


    assert(response.status).to.eql(405);
  });

  it("Failed List with Method PUT", async function () {
    const response = await request_url 
    .put("/list-user")
    .query({username : "michael", email : "jagocoba@gmail.com"}); 


  assert(response.status).to.eql(405);
});

  it("Failed List with Method PATCH", async function () {
    const response = await request_url 
    .patch("/list-user")
    .query({username : "michael", email : "jagocoba@gmail.com"}); 


  assert(response.status).to.eql(405);
});



});