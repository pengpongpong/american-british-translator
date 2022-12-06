'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      const { text, locale } = req.body


      if (text === undefined || locale === undefined) {
        res.json({
          error: "Required field(s) missing"
        })
      }
      else if (text === "") {
        res.json({
          error: "No text to translate"
        })
      }
      else if (locale !== "american-to-british" && locale !== "british-to-american") {
        res.json({
          error: "Invalid value for locale field"
        })
      }
      else {  
        if (locale === "american-to-british") {
        let translation = translator.americanToBritish(text)

        if (translation === text) {
          res.json({
            text: text,
            translation: "Everything looks good to me!"
          })
        }
        else {
          res.json({
            text: text,
            translation: translation
          })
        }
      }
      else if (locale === "british-to-american") {
        let translation = translator.britishToAmerican(text)
        
        if (translation === text) {
          res.json({
            text: text,
            translation: "Everything looks good to me!"
          })
        }
        else {
          res.json({
            text: text,
            translation: translation
          })
        }
      }
      }
      
    
    });
};
