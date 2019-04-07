const request = require('supertest');
const server = require('./index.js');

describe('sever.js', () => {
  it('should set testing environment', () => {
    expect(process.env.DB_ENV).toBe('testing');
  });

  describe('GET /', () => {
    it('should return 200 OK', (done) => {
      // explain that we need to return the call to request()
      // this signals to jest that this test is asynchronous and it needs
      // to wait for the promise to resolve, before running the assertions
      return request(server)
        .get('/')
        .then(res => {
          // the response object has useful methods we can use
          expect(res.status).toBe(200);
        })
        .catch(done);
    });

    // using the squad (async/await) we don't need to return anything
    // jes will wait because of the async function
    it('should return 200 OK using the squad', (done) => {
      return request(server)
        .get('/')
        .expect(200)
        .then(() => done())
        .catch(done);
    });

    it('should return JSON', (done) => {
      return request(server)
        .get('/')
        .expect('Content-Type', /json/)
        .then(() => done())
        .catch(done);
    });

    it('should return { api: "up" }', (done) => {
      return request(server)
        .get('/')
        .expect(200)
        .then(response => {
          expect(response.body).toEqual({ api: 'up' })
        })
        .catch(done);
    });
  });
});
