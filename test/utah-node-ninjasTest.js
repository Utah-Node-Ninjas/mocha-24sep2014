/**
 * Created by Moroni on 9/24/2014.
 */

//https://github.com/visionmedia/should.js/
require('should');


//https://github.com/visionmedia/supertest
var supertest = require('supertest');
var request = supertest('http://utah-node-ninjas.github.io/');


describe('Get from utah-node-ninjas.github.io', function() {
    it('expect return status of 200.', function(done) {
        request.get('/').expect(200).end(function(err, res) {
            if (err)
                return done(err);

            res.text.should.match(/Trent Oswald/);

            res.text.should.not.match(/Random Person/);

            done();
        });
    });
});