/**
 * Created by Kaspar on 1/26/2017.
 */
//Loob IIFE, et ükski teine raamistik ei kirjutaks funktsioone üle
(function(global, $) {
    // uus objekt
    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    }

    //loob prototüübi, et hoida kokku mälu
    Greetr.prototype = {};
    // Siin tehakse tegelik objekt, nii saab ülevalpool luua uue objekti ilma "new" kasutamata
    Greetr.init = function(firstName, lastName, language) {

        var self = this;
        //firstname, on default ''
        self.firstName = firstName || '';
        //lastname, on default ''
        self.lastName = lastName || '';
        //langauge, on default en
        self.language = language || 'en';

    }
    // Jqueryst laenatud trikk, tänu millele ei pea kasutama "new"
    Greetr.init.prototype = Greetr.prototype;
    //Lisab Greetr globaalsele objektile, ning saab välja kutsuda G$ lühendiga
    global.Greetr = global.G$ = Greetr;

}(window, jQuery));