/*
XsChat v7.0.0 Client BootStrapper
---------------------------------
Developer Beta 3
---------------------------------
(c) speedyplane2247 2019
*/
//var $enc = new Object();
//var encrypt = CryptoJS.AES.encrypt
//var decrypt = CryptoJS.AES.encrypt
var $enc = new Object();
if (navigator.userAgent.Contains("Firefox") != true) {
    alert("XsChat v7 reccomends firefox for easier data transfer.")
    $enc.doTheFox = 0
} else {
    $enc.doTheFox = 1
}

function init() {
$enc.message = document.getElementById("data_1").value
$enc.key = document.getElementBydId("key_1").value
}
function encrypt() {
var encryptedAES = CryptoJS.AES.encrypt($enc.message, $enc.key);
if (doTheFox == 1) {
alert(encryptedAES)
} else {
alert("Your browser is not optimized for XsChat and the data has been printed to the console.")
console.log(encryptedAES)
}
}
function decrypt() {
    var decryptedBytes = CryptoJS.AES.decrypt($enc.message, $enc.key);
    if (doTheFox == 1) {
    alert(decryptedBytes.toString(CryptoJS.enc.Utf8))
    } else {
        alert("Your browser is not optimized for XsChat and the data has been printed to console.")
        console.log(decryptedBytes.toString(CryptoJS.enc.Utf8))
    }
}
