(function(global, $) {

    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    }
    // Kuna see on IIFE sees, ei saa seda kunagi muuta, paneb paika keeled, mida saab kasutada
    var supportedLangs = ['en', 'es'];

    //Tervitused
    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };

    //Ametlikud tervitused
    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };

    //login sõnumid
    var logMessages = {
        en: 'Logged in',
        es: 'Inició sesión'
    };

    Greetr.prototype = {

        // Tagastab täisnime
        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        },

        //Kontrollib, kas valitud keel on võimalik
        validate: function() {
            if (supportedLangs.indexOf(this.language)  === -1) {
                throw "Invalid language";
            }
        },

        // retrieve messages from object by referring to properties using [] syntax
        // Tagastab tervitused objektist, kasutatades [] süntaksit
        greeting: function() {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },

        //Tagastab ametliku tervituse
        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.fullName();
        },

        // chainable methods return their own containing object
        greet: function(formal) {
            var msg;

            // Kui formal on undefined või null, on see false ja tagastatakse tavaline tervitus
            if (formal) {
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }

            //Kui konsool on olemas, siis logi msg
            if (console) {
                console.log(msg);
            }

            // "this" vihjab objekti kutsumisele execution ajal
            // nii saab meetoteid üksteise sees kasutada
            return this;
        },

        //Väljastab msh
        log: function() {
            if (console) {
                console.log(logMessages[this.language] + ': ' + this.fullName());
            }
            // saab meetoteid üksteise sees kasutada
            return this;
        },

        //paneb paika language
        setLang: function(lang) {
            //paneb paika language
            this.language = lang;
            //valideerib
            this.validate();
            // saab meetoteid üksteise sees kasutada
            return this;
        }

    };

    Greetr.init = function(firstName, lastName, language) {

        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';

    }

    Greetr.init.prototype = Greetr.prototype;

    global.Greetr = global.G$ = Greetr;

}(window, jQuery));