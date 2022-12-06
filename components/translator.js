const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

// swap key with value
function swap(obj){
    let ret = {};
    for(let key in obj){
      ret[obj[key]]= key;
    }
    return ret;
};

const britishToAmericanSpelling = swap(americanToBritishSpelling);
const britishToAmericanTitles = swap(americanToBritishTitles);

class Translator {

    americanToBritish(string) {
        const american = {...americanOnly, ...americanToBritishSpelling};
        const keysAmerican = Object.keys(american);
        const keysTitle = Object.keys(americanToBritishTitles);

         // time
         if (new RegExp("[0-9]+:[0-9]+").test(string) === true) {
            string = string.replace(new RegExp("([0-9]+):([0-9]+)"), `<span class="highlight">$1.$2</span>`)
        };
      
        // words
        keysAmerican.map(obj => {
            if (new RegExp(`${obj}[(?= )||(?=.)||(?=!)||(?=,)]`, "i").test(string) === true) {
                // let wordReplace = american[obj];
                string = string.replace(new RegExp(`(${obj})`, "i"), `<span class="highlight">${american[obj]}</span>`);
            }
        });

        // title
        keysTitle.map(obj => {
            if (new RegExp(`${obj}[(?= )||(?=.)||(?=!)||(?=,)]`, "i").test(string) === true) {
                let wordReplace = americanToBritishTitles[obj];
                wordReplace = wordReplace.charAt(0).toUpperCase() + wordReplace.slice(1);
                string = string.replace(new RegExp(`${obj}`, "i"), `<span class="highlight">${wordReplace}</span>`);
            }
        });
     
       

        if (string.charAt(0) !== "<") {
            string = string.charAt(0).toUpperCase() + string.slice(1)
        };

        return string 
    };

    britishToAmerican(string) {
        const british = {...britishOnly, ...britishToAmericanSpelling};
        const keysBrit = Object.keys(british);
        const keysTitle = Object.keys(britishToAmericanTitles);

        // time
        if (new RegExp("[0-9]+\\.[0-9]+").test(string) === true) {
            string = string.replace(new RegExp("([0-9]+)\\.([0-9]+)"), `<span class="highlight">$1:$2</span>`)
        };

        // words
        keysBrit.map(obj => {
            if (new RegExp(`${obj}[(?= )||(?=.)||(?=!)||(?=,)]`, "i").test(string) === true) {
                string = string.replace(new RegExp(`${obj}`, "i"), `<span class="highlight">${british[obj]}</span>`)
            }
        });

        // title
        keysTitle.map(obj => {
            if (new RegExp(`${obj}[(?= )||(?=.)||(?=!)||(?=,)]`, "i").test(string) === true) {
                let wordReplace = britishToAmericanTitles[obj];
                wordReplace = wordReplace.charAt(0).toUpperCase() + wordReplace.slice(1);
                string = string.replace(new RegExp(`${obj}`, "i"), `<span class="highlight">${wordReplace}</span>`);
            }
        });
     
        if (string.charAt(0) !== "<") {
            string = string.charAt(0).toUpperCase() + string.slice(1)
        };

        return string
    }
}

module.exports = Translator;