const app = require('../server');
const supertest = require('supertest');
const request = supertest(app);

describe('request.agent(app)', function() {
    it('gets the test endpoint', async function () {
        const response = await request.get('/test');

        expect(response.status).toBe(200);
        expect(response.body.message).toBe('pass!');
    }); 
});


// it('gets the test endpoint', async function (done) {
//     const response = await request.get('/test');

//     request
//       .expect(response.status)


//     // const response = await request.get('/test');

//     // request.expect(response.status).toBe(200);
//     // expect(response.body.message).toBe('pass!');


//     // request.expect(200, done);

//     // function(done) {
//     //   request
//     //     .get('/test')
//     //     .expect('Content-Type', /json/)
//     //     .expect(200, done);
//     // });
// }); 
