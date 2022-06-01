const myTrim = function mytrim() {
    const string1 = "   Function  Up    ";
    const string2 = string1.trim();
    console.log(string2);
}

const myLowerCase = function toLowerCase() {  
    const st3 = "toLowerCase() changes the case of string to lower cases";
    const st4 = st3.toLowerCase();
    console.log(st4);
}

const myUpperCase = function toUpperCase() {
    const st5 = "toUpperCase() changes the case of strings to upper cases";
    const st6 = st5.toUpperCase();
    console.log(st6);
}

module.exports.myTrim = myTrim;
module.exports.myLowerCase = myLowerCase;
module.exports.myUpperCase = myUpperCase;