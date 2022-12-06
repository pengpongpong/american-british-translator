const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');
const path = "/api/translate";

chai.use(chaiHttp);

let Translator = require('../components/translator.js');
let translator = new Translator

/*
Translation with text and locale fields: POST request to /api/translate
Translation with text and invalid locale field: POST request to /api/translate
Translation with missing text field: POST request to /api/translate
Translation with missing locale field: POST request to /api/translate
Translation with empty text: POST request to /api/translate
Translation with text that needs no translation: POST request to /api/translate
*/

suite('Functional Tests', () => {
    test("Translation with text and locale fields: POST request to /api/translate", (done) => {
        chai
            .request(server)
            .post(path)
            .send({
                text: "Mangoes are my favorite fruit.",
                locale: "american-to-british"
            })
            .end((err, res) => {
                assert.equal(res.status, 200);
                assert.equal(res.body.translation, "Mangoes are my <span class=\"highlight\">favourite</span> fruit.")
                done();
            })
    });
    test("Translation with text and invalid locale field: POST request to /api/translate", (done) => {
        chai
            .request(server)
            .post(path)
            .send({
                text: "Mangoes are my favorite fruit.",
                locale: "invalid"
            })
            .end((err, res) => {
                assert.equal(res.status, 200);
                assert.equal(res.body.error, "Invalid value for locale field")
                done();
            }) 
    });
    test("Translation with missing text field: POST request to /api/translate", (done) => {
        chai
        .request(server)
        .post(path)
        .send({
            text: undefined,
            locale: "american-to-british"
        })
        .end((err, res) => {
            assert.equal(res.status, 200);
            assert.equal(res.body.error, "Required field(s) missing")
            done();
        }) 
    });
    test("Translation with missing locale field: POST request to /api/translate", (done) => {
        chai
        .request(server)
        .post(path)
        .send({
            text: "Mangoes are my favorite fruit.",
            locale: undefined
        })
        .end((err, res) => {
            assert.equal(res.status, 200);
            assert.equal(res.body.error, "Required field(s) missing")
            done();
        }) 
    });
    test("Translation with empty text: POST request to /api/translate", (done) => {
        chai
        .request(server)
        .post(path)
        .send({
            text: "",
            locale: "american-to-british"
        })
        .end((err, res) => {
            assert.equal(res.status, 200);
            assert.equal(res.body.error, "No text to translate")
            done();
        }) 
    });
    test("Translation with text that needs no translation: POST request to /api/translate", (done) => {
        chai
        .request(server)
        .post(path)
        .send({
            text: "Mangoes are my favourite fruit.",
            locale: "american-to-british"
        })
        .end((err, res) => {
            assert.equal(res.status, 200);
            assert.equal(res.body.translation, "Everything looks good to me!")
            done();
        }) 
    });

});
