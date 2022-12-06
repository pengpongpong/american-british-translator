const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator

/*
Translate Mangoes are my favorite fruit. to British English
Translate I ate yogurt for breakfast. to British English
Translate We had a party at my friend's condo. to British English
Translate Can you toss this in the trashcan for me? to British English
Translate The parking lot was full. to British English
Translate Like a high tech Rube Goldberg machine. to British English
Translate To play hooky means to skip class or work. to British English
Translate No Mr. Bond, I expect you to die. to British English
Translate Dr. Grosh will see you now. to British English
Translate Lunch is at 12:15 today. to British English
Translate We watched the footie match for a while. to American English
Translate Paracetamol takes up to an hour to work. to American English
Translate First, caramelise the onions. to American English
Translate I spent the bank holiday at the funfair. to American English
Translate I had a bicky then went to the chippy. to American English
Translate I've just got bits and bobs in my bum bag. to American English
Translate The car boot sale at Boxted Airfield was called off. to American English
Translate Have you met Mrs Kalyani? to American English
Translate Prof Joyner of King's College, London. to American English
Translate Tea time is usually around 4 or 4.30. to American English
Highlight translation in Mangoes are my favorite fruit.
Highlight translation in I ate yogurt for breakfast.
Highlight translation in We watched the footie match for a while.
Highlight translation in Paracetamol takes up to an hour to work.
*/

suite('Unit Tests', () => {
    test("Translate Mangoes are my favorite fruit. to British English", (done) => {
        assert.include(translator.americanToBritish("Mangoes are my favorite fruit."), "favourite")
        done();
    });
    test("Translate I ate yogurt for breakfast. to British English", (done) => {
        assert.include(translator.americanToBritish("I ate yogurt for breakfast."), "yoghurt")
        done();
    });
    test("Translate We had a party at my friend's condo. to British English", (done) => {
        assert.include(translator.americanToBritish("We had a party at my friend's condo."), "flat")
        done();
    });
    test("Translate Can you toss this in the trashcan for me? to British English", (done) => {
        assert.include(translator.americanToBritish("Can you toss this in the trashcan for me?"), "bin")
        done();
    });
    test("Translate The parking lot was full. to British English", (done) => {
        assert.include(translator.americanToBritish("The parking lot was full."), "car park")
        done();
    });
    test("Translate Like a high tech Rube Goldberg machine. to British English", (done) => {
        assert.include(translator.americanToBritish("Like a high tech Rube Goldberg machine."), "Heath Robinson device")
        done();
    });
    test("Translate To play hooky means to skip class or work. to British English", (done) => {
        assert.include(translator.americanToBritish("To play hooky means to skip class or work."), "bunk off")
        done();
    });
    test("Translate No Mr. Bond, I expect you to die. to British English", (done) => {
        assert.include(translator.americanToBritish("No Mr. Bond, I expect you to die."), "Mr")
        done();
    });
    test("Translate Dr. Grosh will see you now. to British English", (done) => {
        assert.include(translator.americanToBritish("Dr. Grosh will see you now."), "Dr")
        done();
    });
    test("Translate Lunch is at 12:15 today. to British English", (done) => {
        assert.include(translator.americanToBritish("Lunch is at 12:15 today."), "12.15")
        done();
    });
    test("Translate We watched the footie match for a while. to American English", (done) => {
        assert.include(translator.britishToAmerican("We watched the footie match for a while."), "soccer")
        done();
    });
    test("Translate Paracetamol takes up to an hour to work. to American English", (done) => {
        assert.include(translator.britishToAmerican("Paracetamol takes up to an hour to work."), "Tylenol")
        done();
    });
    test("Translate First, caramelise the onions. to American English", (done) => {
        assert.include(translator.britishToAmerican("First, caramelise the onions."), "caramelize")
        done();
    });
    test("Translate I spent the bank holiday at the funfair. to American English", (done) => {
        assert.include(translator.britishToAmerican("I spent the bank holiday at the funfair."), "carnival")
        assert.include(translator.britishToAmerican("I spent the bank holiday at the funfair."), "public holiday")
        done();
    });
    test("Translate I had a bicky then went to the chippy. to American English", (done) => {
        assert.include(translator.britishToAmerican("I had a bicky then went to the chippy."), "cookie")
        assert.include(translator.britishToAmerican("I had a bicky then went to the chippy."), "fish-and-chip shop")
        done();
    });
    test("Translate I've just got bits and bobs in my bum bag. to American English", (done) => {
        assert.include(translator.britishToAmerican("I've just got bits and bobs in my bum bag."), "odds and ends")
        assert.include(translator.britishToAmerican("I've just got bits and bobs in my bum bag."), "fanny pack")
        done();
    });
    test("Translate The car boot sale at Boxted Airfield was called off. to American English", (done) => {
        assert.include(translator.britishToAmerican("The car boot sale at Boxted Airfield was called off."), "swap meet")
        done();
    });
    test("Translate Have you met Mrs Kalyani? to American English", (done) => {
        assert.include(translator.britishToAmerican("Have you met Mrs Kalyani?"), "Mrs.")
        done();
    });
    test("Translate Prof Joyner of King's College, London. to American English", (done) => {
        assert.include(translator.britishToAmerican("Prof Joyner of King's College, London."), "Prof.")
        done();
    });
    test("Translate Tea time is usually around 4 or 4.30. to American English", (done) => {
        assert.include(translator.britishToAmerican("Tea time is usually around 4 or 4.30."), "4:30")
        done();
    });
    test("Highlight translation in Mangoes are my favorite fruit.", (done) => {
        assert.include(translator.americanToBritish("Mangoes are my favorite fruit."), "<span class=\"highlight\">favourite</span>")
        done();
    });
    test("Highlight translation in I ate yogurt for breakfast.", (done) => {
        assert.include(translator.americanToBritish("I ate yogurt for breakfast."), "<span class=\"highlight\">yoghurt</span>")
        done();
    });
    test("Highlight translation in We watched the footie match for a while.", (done) => {
        assert.include(translator.britishToAmerican("We watched the footie match for a while."), "<span class=\"highlight\">soccer</span>")
        done();
    });
    test("Highlight translation in Paracetamol takes up to an hour to work.", (done) => {
        assert.include(translator.britishToAmerican("Paracetamol takes up to an hour to work."), "<span class=\"highlight\">Tylenol</span>")
        done();
    });
});
