const {salt, unsalt} = require("./helper");

// Add seed here
let seed = "reunion mixed cruise idle observe gesture embody exile inherit person abandon zoo";
let pwd = "P@1sw9rd";

let saltedSeed = salt(seed, pwd);
console.log('init   : ['+ seed + "]");
console.log('salted : ['+ saltedSeed + "]");
console.log('recover: ['+ unsalt(saltedSeed, pwd) + "]");


/*
> node test.js
================== RESULT ==================

init   : [reunion mixed cruise idle observe gesture embody exile inherit person abandon zoo]
salted : [sample news donor ivory page half excuse fiber kit question art arrow]
recover: [reunion mixed cruise idle observe gesture embody exile inherit person abandon zoo]

*/
