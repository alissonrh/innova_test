const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const app = require('../app');
const UserService = require('../services/user.service');
const { allUsers, newUser, updateUser } = require('./mock/users.mock');
const { User } = require('../models/index');

chai.use(chaiHttp);
const expect = chai.expect;

describe('GET /user', () => {
  afterEach(sinon.restore)
  it('should return all users', async () => {
    sinon.stub(UserService, 'getAll').resolves(allUsers);

    const res = await chai.request(app).get('/user');

    expect(res).to.have.status(200);
    expect(res.body).to.be.an('array');
    expect(res.body).to.be.eql(allUsers);
  });

  it('should return 500 on error', async () => {
    sinon.stub(UserService, 'getAll').throws(new Error('Something went wrong!'));

    const res = await chai.request(app).get('/user');
    expect(res.status).to.be.equal(500);
    expect(res.body.message).to.be.equal("Something went wrong!");
  });
});

describe('GET /user/:id', () => {
  afterEach(sinon.restore)
  it('should return user by id', async () => {
    sinon.stub(UserService, 'getById').resolves(allUsers[0]);

    const res = await chai.request(app).get('/user/1');
    expect(res).to.have.status(200);
    expect(res.body).to.be.an('object');
    expect(res.body).to.eql(allUsers[0]);
  });

  it('should return 404 if user not found', async () => {
    sinon.stub(UserService, 'getById').resolves(null);

    const res = await chai.request(app).get('/user/3');
    expect(res).to.have.status(404);
    expect(res.body).to.have.property('message').eql('User not found');
  });

  it('should return 500 on error', async () => {
    sinon.stub(UserService, 'getById').rejects(new Error('Something went wrong!'));

    const res = await chai
    .request(app)
    .get('/user/3');

    expect(res).to.have.status(500);
    expect(res.body).to.have.property('message').eql("Something went wrong!");
  });
});

describe('POST /user', () => {
  afterEach(sinon.restore)
  it('should return 201 and new user', async () => {
    sinon.stub(UserService, 'createUser').resolves({ type: 201, message: newUser });

    const res = await chai
    .request(app)
    .post('/user')
    .send(newUser);

    expect(res).to.have.status(201);
    expect(res.body).to.be.deep.equal(newUser);

  })

  it('should return 400 and an error message', async () => {
    delete newUser.fullName

    const res = await chai
    .request(app)
    .post('/user')
    .send(newUser);

    expect(res).to.have.status(400);
    expect(res.body).to.be.equal("\"fullName\" is required");

  })
})

describe('PUT /user', () => {
  afterEach(sinon.restore)
  it('should return 200 and a message', async () => {
    sinon.stub(User, 'update').resolves([{}]);

    const res = await chai
    .request(app)
    .put('/user/1')
    .send(updateUser);

    expect(res.status).to.be.equal(200);
    expect(res.body).to.be.deep.equal('Usuário atualizado com sucesso!');
  })

  it('should return 400 and an error message', async () => {
    delete updateUser.fullName

    const res = await chai
    .request(app)
    .put('/user/1')
    .send(updateUser);

    expect(res.status).to.be.equal(400);
    expect(res.body).to.be.deep.equal("\"fullName\" is required");

  })

  it('should return 404 and an error message', async () => {
    sinon.stub(User, 'findByPk').resolves(null);

    const res = await chai
    .request(app)
    .put('/user/14541')
    .send({ fullName: "maria flor queiroz", email: "test@example.com", phone: "12345678", whatsApp: "12345678" });

    expect(res.status).to.be.equal(404);
    expect(res.body).to.have.property('message').eql("User not found");

  })
})

describe('DELETE /user', () => {
  it('should return 200 and a message', async () => {
    sinon.stub(User, 'destroy').resolves(1);

    const res = await chai
    .request(app)
    .delete('/user/1')

    expect(res.status).to.be.equal(204);
  })
})
